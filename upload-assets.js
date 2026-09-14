import {
  S3Client,
  PutObjectCommand,
  ListObjectsV2Command,
  DeleteObjectsCommand,
} from "@aws-sdk/client-s3";
import fs from "fs";
import path from "path";
import mime from "mime-types";
import dotenv from "dotenv";

dotenv.config();

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const publicAssetsFolder = path.join(process.cwd(), "public", "assets");
const srcAssetsFolder = path.join(process.cwd(), "src", "assets");
const bucketName = process.env.AWS_BUCKET_NAME;

function walkFolders(dir) {
  let files = [];
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      files = files.concat(walkFolders(fullPath));
    } else {
      files.push(fullPath);
    }
  });
  return files;
}

function mirrorSrcToPublic() {
  if (!fs.existsSync(srcAssetsFolder)) return;
  const srcFiles = walkFolders(srcAssetsFolder);
  let mirroredCount = 0;

  srcFiles.forEach((srcFile) => {
    const rel = path.relative(srcAssetsFolder, srcFile);
    const destFile = path.join(publicAssetsFolder, rel);
    const destDir = path.dirname(destFile);

    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    const srcStat = fs.statSync(srcFile);
    let shouldCopy = false;

    if (!fs.existsSync(destFile)) {
      shouldCopy = true;
    } else {
      const destStat = fs.statSync(destFile);
      if (srcStat.size !== destStat.size) {
        shouldCopy = true;
      }
    }

    if (shouldCopy) {
      fs.copyFileSync(srcFile, destFile);
      mirroredCount++;
      console.log(`📋 Mirrored from src/assets to public/assets: ${rel}`);
    }
  });

  if (mirroredCount > 0) {
    console.log(
      `✅ Mirrored ${mirroredCount} file(s) from src/assets to public/assets.`,
    );
  }
}

async function getS3FilesMap() {
  const fileMap = new Map();
  let continuationToken = undefined;

  do {
    const command = new ListObjectsV2Command({
      Bucket: bucketName,
      Prefix: "assets/",
      ContinuationToken: continuationToken,
    });
    const response = await s3.send(command);

    if (response.Contents) {
      response.Contents.forEach((item) => {
        fileMap.set(item.Key, item.Size);
      });
    }

    continuationToken = response.NextContinuationToken;
  } while (continuationToken);

  return fileMap;
}

async function syncWithS3() {
  try {
    console.log("🔄 Starting full S3 Smart Sync...");

    mirrorSrcToPublic();

    const localFiles = walkFolders(publicAssetsFolder);
    const localS3Keys = localFiles.map((filePath) => {
      const relativePath = path
        .relative(publicAssetsFolder, filePath)
        .replace(/\\/g, "/");
      return `assets/${relativePath}`;
    });

    console.log(`🔍 Fetching existing files from S3 bucket: ${bucketName}...`);
    const s3FileMap = await getS3FilesMap();
    console.log(`📦 Found ${s3FileMap.size} existing items in S3.`);

    let uploadedCount = 0;
    let skippedCount = 0;

    for (let i = 0; i < localFiles.length; i++) {
      const filePath = localFiles[i];
      const s3Key = localS3Keys[i];
      const localStat = fs.statSync(filePath);

      if (s3FileMap.has(s3Key) && s3FileMap.get(s3Key) === localStat.size) {
        skippedCount++;
        continue;
      }

      console.log(
        `🚀 Uploading: ${s3Key} (${(localStat.size / 1024 / 1024).toFixed(2)} MB)...`,
      );
      const fileStream = fs.createReadStream(filePath);
      const contentType = mime.lookup(filePath) || "application/octet-stream";

      await s3.send(
        new PutObjectCommand({
          Bucket: bucketName,
          Key: s3Key,
          Body: fileStream,
          ContentType: contentType,
        }),
      );
      uploadedCount++;
      console.log(`✅ Successfully uploaded: ${s3Key}`);
    }

    console.log(`\n📊 Sync Summary:`);
    console.log(`   - Uploaded / Updated: ${uploadedCount} file(s)`);
    console.log(`   - Already Up-to-date: ${skippedCount} file(s)`);

    const s3Keys = Array.from(s3FileMap.keys());
    const keysToDelete = s3Keys.filter((key) => !localS3Keys.includes(key));

    if (keysToDelete.length > 0) {
      console.log(
        `🗑️ Found ${keysToDelete.length} obsolete file(s) in S3. Deleting...`,
      );
      // S3 DeleteObjects supports max 1000 keys per call
      for (let i = 0; i < keysToDelete.length; i += 1000) {
        const batch = keysToDelete.slice(i, i + 1000);
        const deleteParams = {
          Bucket: bucketName,
          Delete: { Objects: batch.map((key) => ({ Key: key })) },
        };
        await s3.send(new DeleteObjectsCommand(deleteParams));
        batch.forEach((key) => console.log(`❌ Deleted from S3: ${key}`));
      }
    }

    console.log(
      "🎉 S3 Bucket is now 100% in sync with your local assets folder!",
    );
  } catch (error) {
    console.error("❌ Sync Error:", error);
  }
}

syncWithS3();

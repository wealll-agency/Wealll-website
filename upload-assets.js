import {
  S3Client,
  PutObjectCommand,
  ListObjectsV2Command,
  DeleteObjectsCommand,
} from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import fs from "fs";
import path from "path";
import mime from "mime-types";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config();

const region = (process.env.AWS_REGION || "ap-south-1").trim();
const accessKeyId = (process.env.AWS_ACCESS_KEY_ID || "").trim();
const secretAccessKey = (process.env.AWS_SECRET_ACCESS_KEY || "").trim();
const bucketName = (process.env.AWS_BUCKET_NAME || "wealll-media-assets").trim();

if (!accessKeyId || !secretAccessKey) {
  console.warn("⚠️ AWS S3 credentials missing in .env. S3 sync will be skipped.");
}

export const s3 = new S3Client({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

export const publicAssetsFolder = path.join(process.cwd(), "public", "assets");
export const srcAssetsFolder = path.join(process.cwd(), "src", "assets");

export function walkFolders(dir) {
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

export function mirrorSrcToPublic() {
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
    console.log(`✅ Mirrored ${mirroredCount} file(s) from src/assets to public/assets.`);
  }
}

export async function getS3FilesMap() {
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

/**
 * Upload a single file to S3 with multipart support for large files (> 5MB)
 */
export async function uploadSingleFile(filePath, s3Key) {
  const stat = fs.statSync(filePath);
  const fileSizeMb = (stat.size / (1024 * 1024)).toFixed(2);
  const contentType = mime.lookup(filePath) || "application/octet-stream";
  const fileStream = fs.createReadStream(filePath);

  // Use multipart Upload for files larger than 5 MB
  if (stat.size > 5 * 1024 * 1024) {
    console.log(`🚀 [Multipart Upload] Starting ${s3Key} (${fileSizeMb} MB)...`);
    const parallelUpload = new Upload({
      client: s3,
      params: {
        Bucket: bucketName,
        Key: s3Key,
        Body: fileStream,
        ContentType: contentType,
      },
      queueSize: 4,
      partSize: 5 * 1024 * 1024,
      leavePartsOnError: false,
    });

    let lastLoggedPercent = 0;
    parallelUpload.on("httpUploadProgress", (progress) => {
      if (progress.total) {
        const percent = Math.floor((progress.loaded / progress.total) * 100);
        if (percent >= lastLoggedPercent + 25 || percent === 100) {
          lastLoggedPercent = percent;
          console.log(`   ⏳ [Progress] ${s3Key}: ${percent}% (${(progress.loaded / (1024 * 1024)).toFixed(1)}MB / ${(progress.total / (1024 * 1024)).toFixed(1)}MB)`);
        }
      }
    });

    await parallelUpload.done();
    console.log(`✅ [Multipart Upload] Completed: ${s3Key}`);
  } else {
    await s3.send(
      new PutObjectCommand({
        Bucket: bucketName,
        Key: s3Key,
        Body: fileStream,
        ContentType: contentType,
      })
    );
    console.log(`✅ Uploaded: ${s3Key} (${fileSizeMb} MB)`);
  }
}

export async function syncWithS3() {
  if (!accessKeyId || !secretAccessKey) {
    console.warn("⚠️ Skipping S3 sync: AWS credentials missing.");
    return;
  }

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

      await uploadSingleFile(filePath, s3Key);
      uploadedCount++;
    }

    console.log(`\n📊 Sync Summary:`);
    console.log(`   - Uploaded / Updated: ${uploadedCount} file(s)`);
    console.log(`   - Already Up-to-date: ${skippedCount} file(s)`);

    const s3Keys = Array.from(s3FileMap.keys());
    const keysToDelete = s3Keys.filter((key) => !localS3Keys.includes(key));

    if (keysToDelete.length > 0) {
      console.log(`🗑️ Found ${keysToDelete.length} obsolete file(s) in S3. Deleting...`);
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

    console.log("🎉 S3 Bucket is now 100% in sync with your local assets folder!");
  } catch (error) {
    console.error("❌ S3 Sync Error:", error);
  }
}

// If run directly from CLI (e.g. `node upload-assets.js`)
const currentFile = fileURLToPath(import.meta.url);
if (process.argv[1] && path.resolve(process.argv[1]) === currentFile) {
  syncWithS3();
}

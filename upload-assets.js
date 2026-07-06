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

const uploadFolder = path.join(process.cwd(), "src", "assets");
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

async function getS3Files() {
  const command = new ListObjectsV2Command({
    Bucket: bucketName,
    Prefix: "assets/",
  });
  const response = await s3.send(command);
  return response.Contents ? response.Contents.map((item) => item.Key) : [];
}

async function syncWithS3() {
  try {
    console.log("🔄 Starting full S3 Smart Sync...");

    const localFiles = walkFolders(uploadFolder);
    const localS3Keys = localFiles.map((filePath) => {
      const relativePath = path
        .relative(uploadFolder, filePath)
        .replace(/\\/g, "/");
      return `assets/${relativePath}`;
    });

    const s3Keys = await getS3Files();

    for (let i = 0; i < localFiles.length; i++) {
      const filePath = localFiles[i];
      const s3Key = localS3Keys[i];
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
    }
    console.log(`✅ Uploaded/Updated ${localFiles.length} local files to S3.`);

    const keysToDelete = s3Keys.filter((key) => !localS3Keys.includes(key));

    if (keysToDelete.length > 0) {
      console.log(
        `🗑️ Found ${keysToDelete.length} obsolete files in S3. Deleting...`,
      );
      const deleteParams = {
        Bucket: bucketName,
        Delete: { Objects: keysToDelete.map((key) => ({ Key: key })) },
      };
      await s3.send(new DeleteObjectsCommand(deleteParams));
      keysToDelete.forEach((key) => console.log(`❌ Deleted from S3: ${key}`));
    }

    console.log(
      "🚀 S3 Bucket is now 100% in sync with your local assets folder!",
    );
  } catch (error) {
    console.error("❌ Sync Error:", error);
  }
}

syncWithS3();

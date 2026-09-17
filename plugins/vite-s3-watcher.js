import path from "path";
import fs from "fs";
import { uploadSingleFile, mirrorSrcToPublic, publicAssetsFolder, srcAssetsFolder } from "../upload-assets.js";

const ALLOWED_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".svg",
  ".gif",
  ".mp4",
  ".webm",
  ".pdf",
  ".ico",
]);

export default function viteS3WatcherPlugin() {
  const pendingUploads = new Map();

  return {
    name: "vite-plugin-s3-auto-sync",
    apply: "serve", // Only active in dev mode (npm run dev)
    configureServer(server) {
      const handleFile = (filePath) => {
        const ext = path.extname(filePath).toLowerCase();
        if (!ALLOWED_EXTENSIONS.has(ext)) return;

        const normalized = path.normalize(filePath);
        let s3Key = null;
        let fileToUpload = normalized;

        if (normalized.startsWith(publicAssetsFolder)) {
          const rel = path.relative(publicAssetsFolder, normalized).replace(/\\/g, "/");
          s3Key = `assets/${rel}`;
        } else if (normalized.startsWith(srcAssetsFolder)) {
          const rel = path.relative(srcAssetsFolder, normalized).replace(/\\/g, "/");
          s3Key = `assets/${rel}`;
          // Mirror to public
          const dest = path.join(publicAssetsFolder, rel);
          const destDir = path.dirname(dest);
          if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
          fs.copyFileSync(normalized, dest);
          fileToUpload = dest;
        }

        if (!s3Key) return;

        // Debounce uploads (500ms) to ensure file write is finished
        if (pendingUploads.has(s3Key)) {
          clearTimeout(pendingUploads.get(s3Key));
        }

        const timer = setTimeout(async () => {
          pendingUploads.delete(s3Key);
          try {
            if (!fs.existsSync(fileToUpload)) return;
            console.log(`\n⚡ [S3 Auto-Sync] Detected file change: ${s3Key}`);
            await uploadSingleFile(fileToUpload, s3Key);
            console.log(`✨ [S3 Auto-Sync] S3 updated for: ${s3Key}\n`);
          } catch (err) {
            console.error(`❌ [S3 Auto-Sync] Failed to upload ${s3Key}:`, err.message);
          }
        }, 800);

        pendingUploads.set(s3Key, timer);
      };

      server.watcher.on("add", handleFile);
      server.watcher.on("change", handleFile);

      console.log("👀 [S3 Auto-Sync] Live asset watcher active for public/assets and src/assets");
    },
  };
}

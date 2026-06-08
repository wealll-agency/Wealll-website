import fs from "fs";
import path from "path";
import https from "https";

const urls = [
  "https://npdigital.com/wp-content/uploads/2025/08/logo-01.png",
  "https://npdigital.com/wp-content/uploads/2025/08/logo-02.png",
  "https://npdigital.com/wp-content/uploads/2025/08/logo-03.png",
  "https://npdigital.com/wp-content/uploads/2025/08/logo-04.png",
  "https://npdigital.com/wp-content/uploads/2025/08/logo-05.png",
  "https://npdigital.com/wp-content/uploads/2025/12/nissan-logo-white.png",
  "https://npdigital.com/wp-content/uploads/2025/08/logo-07.png",
  "https://npdigital.com/wp-content/uploads/2025/08/logo-08.png",
  "https://npdigital.com/wp-content/uploads/2025/12/kumon-logo-white.png",
  "https://npdigital.com/wp-content/uploads/2025/08/logo-11.png",
  "https://npdigital.com/wp-content/uploads/2025/12/dhl-logo-white.png",
  "https://npdigital.com/wp-content/uploads/2025/08/logo-13.png",
  "https://npdigital.com/wp-content/uploads/2025/12/unilever-logo-white.png",
  "https://npdigital.com/wp-content/uploads/2025/08/logo-14.png",
  "https://npdigital.com/wp-content/uploads/2025/12/prudential-logo-white.png",
  "https://npdigital.com/wp-content/uploads/2026/01/church-dwight-logo.png",
  "https://npdigital.com/wp-content/uploads/2025/08/logo-17.png",
  "https://npdigital.com/wp-content/uploads/2025/08/logo-18.png",
  "https://npdigital.com/wp-content/uploads/2025/12/dominos-logo-white.png",
  "https://npdigital.com/wp-content/uploads/2025/08/logo-19.png",
];

const dir = path.join(
  process.cwd(),
  "src",
  "assets",
  "images",
  "clients",
  "np_logos",
);
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function downloadImage(url, idx) {
  const filename = `logo_${String(idx + 1).padStart(2, "0")}.png`;
  const dest = path.join(dir, filename);

  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const request = https
      .get(
        url,
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            Accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            Referer: "https://npdigital.com/",
          },
        },
        (response) => {
          if (response.statusCode === 200) {
            response.pipe(file);
            file.on("finish", () => {
              file.close();
              resolve(filename);
            });
          } else {
            reject(`Failed to download ${url}: status ${response.statusCode}`);
          }
        },
      )
      .on("error", (err) => {
        fs.unlink(dest, () => reject(err));
      });
  });
}

(async () => {
  try {
    console.log(`Downloading ${urls.length} images...`);
    for (let i = 0; i < urls.length; i++) {
      await downloadImage(urls[i], i);
      console.log(`[${i + 1}/${urls.length}] Downloaded ${urls[i]}`);
    }
    console.log("Successfully downloaded all 20 authentic logos!");
  } catch (e) {
    console.error(e);
  }
})();

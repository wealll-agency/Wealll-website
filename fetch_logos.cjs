const https = require('https');
const fs = require('fs');
const path = require('path');

const downloadDir = path.join(__dirname, 'src', 'assets', 'logos');
if (!fs.existsSync(downloadDir)) fs.mkdirSync(downloadDir, { recursive: true });

function getHtml(url) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            if (res.statusCode !== 200) {
                // handle redirects if necessary, but skipping for now
                console.log(`Skipping ${url} (status: ${res.statusCode})`);
                return resolve();
            }
            const file = fs.createWriteStream(dest);
            res.pipe(file);
            file.on('finish', () => { file.close(); resolve(); });
        }).on('error', reject);
    });
}

async function run() {
    try {
        console.log("Fetching HTML...");
        const html = await getHtml('https://newsreach.in/landing-page/');
        const regex = /<img[^>]+src=["']([^"']+)["']/gi;
        let match;
        const urls = new Set();
        while ((match = regex.exec(html)) !== null) {
            let imgUrl = match[1];
            if (!imgUrl.startsWith('http')) {
                if (imgUrl.startsWith('//')) imgUrl = 'https:' + imgUrl;
                else imgUrl = new URL(imgUrl, 'https://newsreach.in/landing-page/').href;
            }
            // Filter common logo keywords to avoid downloading everything
            if (imgUrl.includes('logo') || imgUrl.includes('Logo') || imgUrl.includes('publisher') || imgUrl.includes('client') || imgUrl.includes('media')) {
                 urls.add(imgUrl);
            }
        }
        
        console.log(`Found ${urls.size} potential logos. Downloading...`);
        let count = 0;
        for (const url of urls) {
            const filename = path.basename(new URL(url).pathname);
            if (filename.match(/\.(png|jpe?g|svg|webp)$/i)) {
               count++;
               console.log(`Downloading ${filename}`);
               await downloadImage(url, path.join(downloadDir, filename));
            }
        }
        console.log("Done downloading logos!");
    } catch(err) {
        console.error("Error:", err);
    }
}
run();

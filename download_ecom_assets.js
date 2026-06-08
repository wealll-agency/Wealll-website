const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  { url: 'https://webandcrafts.com/images/services/ecommerce/ai-search.webp', name: 'ai-search.webp' },
  { url: 'https://webandcrafts.com/images/services/ecommerce/ai-enabled.webp', name: 'ai-enabled.webp' },
  { url: 'https://webandcrafts.com/images/services/ecommerce/ai-visual.webp', name: 'ai-visual.webp' },
  { url: 'https://webandcrafts.com/images/services/ecommerce/ai-personalised.webp', name: 'ai-personalised.webp' },
  { url: 'https://webandcrafts.com/images/services/ecommerce/ai-order.webp', name: 'ai-order.webp' },
  { url: 'https://webandcrafts.com/images/services/ecommerce/ai-search-analytics.webp', name: 'ai-search-analytics.webp' }
];

const targetDir = path.join('d:', 'Kaustav', 'Projects', 'wealll_company_website', 'WeAlll_React', 'src', 'assets', 'images', 'ecommerce');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

images.forEach(img => {
  const filePath = path.join(targetDir, img.name);
  const file = fs.createWriteStream(filePath);
  
  https.get(img.url, (response) => {
    if (response.statusCode === 200) {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${img.name}`);
      });
    } else {
      console.error(`Failed to download ${img.name}: Status ${response.statusCode}`);
      file.close();
      fs.unlink(filePath, () => {}); // Delete empty file
    }
  }).on('error', (err) => {
    console.error(`Error downloading ${img.name}: ${err.message}`);
    file.close();
    fs.unlink(filePath, () => {});
  });
});

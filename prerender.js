import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import express from 'express';

const DIST_DIR = path.join(process.cwd(), 'dist');
const SITEMAP_PATH = path.join(DIST_DIR, 'sitemap.xml');
const PORT = 54321; 

async function prerender() {
  if (!fs.existsSync(DIST_DIR)) {
    console.error('Error: dist folder not found. Run vite build first.');
    process.exit(1);
  }
  
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error('Error: sitemap.xml not found in dist. Cannot determine routes.');
    process.exit(1);
  }

  // 1. Extract routes from sitemap.xml
  const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  const locRegex = /<loc>(.*?)<\/loc>/g;
  const routes = [];
  let match;
  while ((match = locRegex.exec(sitemapContent)) !== null) {
    const url = new URL(match[1]);
    routes.push(url.pathname);
  }

  console.log(`Found ${routes.length} routes to prerender.`);

  // 2. Start Express Server
  const app = express();
  
  app.use(express.static(DIST_DIR));
  
  // Fallback to index.html for SPA routing
  app.use((req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
  });

  const server = app.listen(PORT, () => {
    console.log(`Local server started on http://localhost:${PORT}`);
  });

  // 3. Launch Puppeteer
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    // Only allow essential scripts and html, abort images/fonts to speed up
    if (['image', 'stylesheet', 'font', 'media'].includes(req.resourceType())) {
      req.abort();
    } else {
      req.continue();
    }
  });

  // 4. Prerender each route
  for (const route of routes) {
    try {
      console.log(`Prerendering ${route}...`);
      await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle2', timeout: 30000 });
      
      const html = await page.content();
      
      // Save HTML to dist directory
      const dirPath = route === '/' ? DIST_DIR : path.join(DIST_DIR, route.slice(1));
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
      
      const filePath = path.join(dirPath, 'index.html');
      fs.writeFileSync(filePath, html);
      console.log(`✅ Saved ${filePath}`);
    } catch (e) {
      console.error(`❌ Failed to prerender ${route}:`, e.message);
    }
  }

  // 5. Cleanup
  await browser.close();
  server.close();
  console.log('🎉 Prerendering complete!');
}

prerender();

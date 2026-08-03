import fs from 'fs';
import path from 'path';
import { CareerData } from './src/Data/CareerData.js';

const APP_JSX_PATH = path.join(process.cwd(), 'src', 'App.jsx');
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');
const ROBOTS_PATH = path.join(PUBLIC_DIR, 'robots.txt');
const LLM_PATH = path.join(PUBLIC_DIR, 'llm.txt');

const DOMAIN = 'https://www.wealll.com';

function generateSitemap() {
  if (!fs.existsSync(APP_JSX_PATH)) {
    console.error(`Error: Could not find ${APP_JSX_PATH}`);
    process.exit(1);
  }

  const appJsxContent = fs.readFileSync(APP_JSX_PATH, 'utf-8');

  // Regex to find all path="/something" in App.jsx
  const pathRegex = /path=["'](\/[^"']*)["']/g;
  const paths = [];
  let match;

  while ((match = pathRegex.exec(appJsxContent)) !== null) {
    const routePath = match[1];
    paths.push(routePath);
  }

  // Filter paths
  const excludePaths = ['*', '/admin', '/login', '/dashboard'];
  const validPaths = paths
    .filter(p => !excludePaths.includes(p))
    .filter(p => !p.includes(':')); // Exclude dynamic routes like /:id

  // Remove duplicates just in case
  let uniquePaths = [...new Set(validPaths)];

  // Inject dynamic career routes
  uniquePaths.push(...CareerData.map(job => `/career-details/${job.slug}`));

  // 1. Generate sitemap.xml
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniquePaths.map(p => `  <url>
    <loc>${DOMAIN}${p}</loc>
    <changefreq>weekly</changefreq>
    <priority>${p === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(SITEMAP_PATH, sitemapContent, 'utf-8');
  console.log(`✅ Generated sitemap.xml with ${uniquePaths.length} URLs`);

  // 2. Generate robots.txt
  const robotsContent = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`;
  fs.writeFileSync(ROBOTS_PATH, robotsContent, 'utf-8');
  console.log('✅ Generated robots.txt');

  // 3. Generate llm.txt
  const llmContent = `# We Alll - Results Driven Digital Marketing Agency

We Alll is a digital marketing agency specializing in SEO, content creation, video production, experience design, development, page recovery, PR services, and influencer marketing.

## Available Pages
${uniquePaths.map(p => `- [${p === '/' ? 'Home' : p.slice(1).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}](${DOMAIN}${p})`).join('\n')}
`;
  fs.writeFileSync(LLM_PATH, llmContent, 'utf-8');
  console.log('✅ Generated llm.txt');
}

generateSitemap();

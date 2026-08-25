import fs from 'fs';
import path from 'path';
import { CareerData } from './src/Data/CareerData.js';

const APP_JSX_PATH = path.join(process.cwd(), 'src', 'App.jsx');
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');
const ROBOTS_PATH = path.join(PUBLIC_DIR, 'robots.txt');
const LLM_PATH = path.join(PUBLIC_DIR, 'llm.txt');
const LLMS_PATH = path.join(PUBLIC_DIR, 'llms.txt');

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
    .filter(p => !p.includes(':') && !p.includes('*')); // Exclude dynamic and wildcard routes

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

  // 3. Generate llms.txt (following standard llmstxt.org specification)
  // Categorize paths for better LLM context
  const mainPages = [];
  const services = [];
  const contentCreation = [];
  const videoProduction = [];
  const experienceDesign = [];
  const development = [];
  const prAndRecovery = [];
  const influencerMarketing = [];
  const otherPages = [];

  uniquePaths.forEach(p => {
    if (['/', '/about', '/contact', '/terms', '/privacy-policy', '/career', '/blog'].includes(p)) {
      mainPages.push(p);
    } else if (['/digital-marketing', '/seo-services', '/social-media-marketing', '/content-marketing', '/email-marketing', '/360-marketing', '/whatsapp-marketing'].includes(p)) {
      services.push(p);
    } else if (['/blogs', '/case-studies', '/content-localisation', '/content-moderation', '/corporate-theme-songs', '/ebooks', '/film-subtitling', '/mailers', '/newsletters', '/press-releases', '/ecommerce-product-description', '/seo-content', '/social-media-management', '/sops', '/script-writing', '/web-content', '/white-papers'].includes(p)) {
      contentCreation.push(p);
    } else if (['/ad-films', '/corporate-films', '/exhibition-videos', '/platform-explanatory-videos', '/platform-flagship-videos', '/product-faq-videos', '/success-stories', '/television-commercials', '/testimonial-videos'].includes(p)) {
      videoProduction.push(p);
    } else if (['/advertising-campaign-assets', '/brand-manual', '/catalogues', '/communication-collaterals', '/company-profile', '/event-branding-assets', '/exhibition-kiosks', '/investors-deck', '/branding-design', '/logo-design', '/portfolio-design', '/presentation', '/product-packaging'].includes(p)) {
      experienceDesign.push(p);
    } else if (['/ecommerce-development', '/woocommerce-development', '/website-development', '/mobile-app-development', '/mern-stack-development', '/shopify-development', '/laravel-developer', '/wordpress-developer'].includes(p)) {
      development.push(p);
    } else if (['/facebook-page-recovery', '/gmb-suspension', '/ownership-recovery', '/crisis-management', '/press-release', '/media-relations', '/reputation-management'].includes(p)) {
      prAndRecovery.push(p);
    } else if (['/barter-collaboration', '/paid-collaboration', '/podcast-collaboration', '/affiliate-collaboration', '/ugc-collaboration', '/instagram-reel-collaboration', '/youtube-integration-collaboration'].includes(p)) {
      influencerMarketing.push(p);
    } else {
      otherPages.push(p);
    }
  });

  const formatLink = (p) => {
    let title = p === '/' ? 'Home' : p.slice(1).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return `- [${title}](${DOMAIN}${p})`;
  };

  const llmsContent = `# We Alll

> Results-driven Digital Marketing Agency offering SEO, Content Creation, Video Production, Experience Design, Development, PR, and Influencer Marketing services.

We Alll is a comprehensive digital marketing agency based in Kolkata. This document provides an index of our publicly available services and information.

## Core Pages
${mainPages.map(formatLink).join('\n')}

## Digital Marketing & SEO Services
${services.map(formatLink).join('\n')}

## Web & App Development
${development.map(formatLink).join('\n')}

## Content Creation
${contentCreation.map(formatLink).join('\n')}

## Video Production
${videoProduction.map(formatLink).join('\n')}

## Experience Design & Branding
${experienceDesign.map(formatLink).join('\n')}

## Influencer Marketing
${influencerMarketing.map(formatLink).join('\n')}

## Page Recovery & PR Services
${prAndRecovery.map(formatLink).join('\n')}

${otherPages.length > 0 ? `## Additional Resources\n${otherPages.map(formatLink).join('\n')}\n` : ''}

## Contact
- Main Website: ${DOMAIN}
- Contact Page: ${DOMAIN}/contact
`;
  
  fs.writeFileSync(LLMS_PATH, llmsContent, 'utf-8');
  console.log('✅ Generated llms.txt');
}

generateSitemap();

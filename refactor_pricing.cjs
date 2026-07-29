const fs = require('fs');
const path = require('path');

const serviceComponentDir = path.join(__dirname, 'src', 'Components', 'ServiceComponent');

function processFile(filePath) {
    if (!filePath.endsWith('.jsx')) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let modified = false;

    // Regex to match imports like: import SEOPackages from "./InnerComponents/SEOPackages";
    // Also captures the component name
    const importRegex = /import\s+([A-Za-z0-9_]+(Packages|Pricing))\s+from\s+['"]([^'"]+)['"];?/g;
    
    let match;
    let componentsToReplace = [];

    while ((match = importRegex.exec(content)) !== null) {
        componentsToReplace.push(match[1]);
    }

    if (componentsToReplace.length > 0) {
        console.log(`Processing: ${filePath}`);
        
        // Determine service name from directory name, e.g. "SocialMediaMarketing" -> "Social Media Marketing"
        // Just adding spaces before capital letters (excluding first)
        const dirName = path.basename(path.dirname(filePath));
        let serviceName = dirName.replace(/([A-Z])/g, ' $1').trim();
        // Specific fixes
        if (serviceName.toLowerCase() === 's e o') serviceName = 'SEO';
        
        // 1. Remove the old imports
        content = content.replace(importRegex, '');

        // 2. Add the new import after React import or at the top
        // Let's just put it below the last import we can find, or at the top
        let importAdded = false;
        
        // Find if BottomComponents is imported to copy its path depth
        const bottomCompRegex = /import\s+BottomComponents\s+from\s+['"]([^'"]+)BottomComponents['"];?/;
        const bottomMatch = content.match(bottomCompRegex);
        
        let relPath = '../../CommonComponents/ServiceCTA';
        if (bottomMatch) {
            relPath = bottomMatch[1] + 'ServiceCTA';
        }

        const newImport = `import ServiceCTA from "${relPath}";\n`;
        
        // Insert after the first import React
        content = content.replace(/import React[^;]*;/, (match) => match + '\n' + newImport);

        // 3. Replace the JSX tags: <SEOPackages /> or <TvCommercialPricing/>
        componentsToReplace.forEach(comp => {
            const jsxRegex = new RegExp(`<${comp}\\s*(?:/\\>|>.*?</${comp}>)`, 'g');
            content = content.replace(jsxRegex, `<ServiceCTA serviceName="${serviceName}" />`);
        });

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated ${filePath}`);
        }
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            walkDir(fullPath);
        } else {
            processFile(fullPath);
        }
    }
}

walkDir(serviceComponentDir);
console.log("Done refactoring.");

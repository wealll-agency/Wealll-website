const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getFiles(fullPath, files);
    } else if (file.endsWith('.jsx')) {
      files.push(fullPath);
    }
  }
  return files;
}

const allJsx = getFiles(path.join(__dirname, 'src/Components/ServiceComponent'));
const mainComponents = allJsx.filter(f => !f.includes('InnerComponents') && !f.includes('CommonComponents'));

mainComponents.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Regex to find things like <EmailPackages /> or <SEO_Packages /> or <LogoPricing />
  const packageRegex = /<([A-Za-z0-9_]+(?:Packages|Pricing)) \/>/g;
  let match;
  
  while ((match = packageRegex.exec(content)) !== null) {
    const compName = match[1];
    console.log(`Found ${compName} in ${file}`);
    
    // Replace the component with <ServiceCTA />
    // Wait, first we need to get a service name for the ServiceCTA.
    // The title of the page is usually in <Intro title="Something" />
    let serviceName = "Our Services";
    const titleMatch = content.match(/<Intro[^>]*title="([^"]+)"/);
    if (titleMatch) {
      serviceName = titleMatch[1].replace(/ Services?$/i, ''); // e.g. "Email Marketing"
    }

    content = content.replace(new RegExp(` *<${compName} \\/>\\n?`, 'g'), `      <ServiceCTA serviceName="${serviceName}" />\n`);
    
    // Also remove the import for compName
    content = content.replace(new RegExp(`import ${compName} from .*;\\n?`), '');
    changed = true;
  }
  
  // Also check if we need to add import for ServiceCTA
  if (changed && !content.includes('import ServiceCTA')) {
    // find the last import and add it after
    const imports = content.match(/import .*?;/g);
    if (imports) {
      const lastImport = imports[imports.length - 1];
      // calculate relative path to CommonComponents/ServiceCTA
      const dir = path.dirname(file);
      const relativePath = path.relative(dir, path.join(__dirname, 'src/Components/ServiceComponent/CommonComponents/ServiceCTA')).replace(/\\/g, '/');
      content = content.replace(lastImport, `${lastImport}\nimport ServiceCTA from "${relativePath}";`);
    }
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});

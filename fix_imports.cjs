const fs = require('fs');
const path = require('path');

const filesToFix = [
  "src/Components/ServiceComponent/Development/ShopifyDevelopment/ShopifyDevelopment.jsx",
  "src/Components/ServiceComponent/Development/WordPressDeveloper/WordPressDeveloper.jsx",
  "src/Components/ServiceComponent/PageRecovery/FacebookPageRecovery/FacebookPageRecovery.jsx",
  "src/Components/ServiceComponent/PageRecovery/GmbSuspension/GmbSuspension.jsx",
  "src/Components/ServiceComponent/PageRecovery/OwnershipRecovery/GmbRecovery.jsx",
  "src/Components/ServiceComponent/PRServices/ReputationManagement/ReputationManagement.jsx"
];

filesToFix.forEach(relFile => {
    const file = path.join(__dirname, relFile);
    if (!fs.existsSync(file)) return;
    
    let content = fs.readFileSync(file, 'utf8');
    
    if (content.includes('<ServiceCTA') && !content.includes('import ServiceCTA')) {
        const dir = path.dirname(file);
        const relativePath = path.relative(dir, path.join(__dirname, 'src/Components/ServiceComponent/CommonComponents/ServiceCTA')).replace(/\\/g, '/');
        
        let imports = content.match(/import .*(\n|\r\n|$)/g);
        if (imports) {
            let lastImport = imports[imports.length - 1];
            content = content.replace(lastImport, lastImport.trim() + '\nimport ServiceCTA from "' + relativePath + '";\n');
            fs.writeFileSync(file, content, 'utf8');
            console.log('Fixed: ' + file);
        }
    }
});

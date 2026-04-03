const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

function walkDir(dir) {
    let files = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            files = files.concat(walkDir(file));
        } else {
            if (file.endsWith('.jsx')) {
                files.push(file);
            }
        }
    });
    return files;
}

const files = walkDir(directoryPath);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace text and bg colors
    content = content.replace(/bg-bg-dark/g, 'bg-white');
    content = content.replace(/bg-bg-section/g, 'bg-gray-50');
    content = content.replace(/bg-bg-card/g, 'bg-white');
    content = content.replace(/\btext-white\b/g, 'text-gray-900');
    content = content.replace(/text-\[#F0F6FF\]/g, 'text-gray-900');
    
    // Replace specific dark gradients with light ones
    content = content.replace(/rgba\(6,12,26,/g, 'rgba(255,255,255,');
    
    // In Navbar, we might have sticky bg that is bg-[rgba(6,12,26,0.9)] -> replace to white
    // since we already replace rgba(6,12... it will become rgba(255,255,255...
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Processed: ${file}`);
});
console.log('Done replacing classes in JSX files.');

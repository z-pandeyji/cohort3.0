const fs = require('fs').promises;

async function cleanFile(filename) {
    try {
        const content = await fs.readFile(filename, 'utf8');
        const cleanedContent = content.replace(/\s+/g, ' ').trim();
        await fs.writeFile(filename, cleanedContent);
        
        console.log(`File '${filename}' has been cleaned.`);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

const filename = 'a.txt';
cleanFile(filename);
// Q: Write a function that
// Reads the contents of a file
// Trims the extra space from the left and right
// Writes it back to the file


const fs = require('fs');

function readFile(file) {
fs.readFile(file, 'utf-8', (err, data) => {
    if(err) {
        console.error('Error reading file', err);
        return;
    }
    const value = data.trim();
    
    fs.writeFile(file, value, 'utf-8', (err) => {
        if(err) {
            console.error('Error Writing file:', err);
            return;
        }
        console.log('File has been updated successfully');
    })

})
}

// readFile('a.txt');


// promisified version

function cleanFile(filePath) {
  return new Promise(function (resolve) {
    fs.readFile(filePath, "utf-8", function (err, data) {
      data = data.trim();
      fs.writeFile(filePath, data, function () {
        resolve();
      });
    });
  });
}

async function main() {
  await cleanFile("a.txt");
  console.log("Done cleaning file");
}

main();

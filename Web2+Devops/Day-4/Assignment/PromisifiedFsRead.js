// Try to create a promisified version of 
// FileSystem.readFile

const fs = require('fs');

function delayReadFile(file, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, encoding, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
const filePath = '../Day3.txt';
delayReadFile(filePath, 'utf-8').then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});
console.log('Fs End');
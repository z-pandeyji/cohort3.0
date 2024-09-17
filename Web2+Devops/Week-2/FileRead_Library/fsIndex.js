const fs = require('fs');

const contents = fs.readFileSync("a.txt", "utf-8"); // Reading file synchronously
console.log(contents);


fs.readFile("b.txt", "utf-8", function(err, contents2) {
    console.log(contents2);
}); // Reading file asynchronously


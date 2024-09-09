const fs = require('fs');

const data = 'This is the new dummy content.';

function expensiveOperation() {
    let sum = 0;
    for (let i = 0; i < 1e8; i++) { 
        sum += i;
    }
    console.log('Expensive operation result:', sum);
}

fs.writeFile("a.txt", data, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log(`Data written to a.txt`);

});

expensiveOperation();
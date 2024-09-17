const crypto = require('crypto');

const input = "100xdevs";
// createHash (Hash Type), update(the value)  these function return object. 
// digest(bit type) function
const hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash)
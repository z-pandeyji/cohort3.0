const crypto = require("crypto");

function findHashPrefix(prefix) {
  let input = 0;
  while (true) {
    let value = "100xdevs" + input.toString();
    const hash = crypto.createHash("sha256").update(value).digest("hex");
    if (hash.startsWith(prefix)) {
      return { input: value, hash: hash };
    }
    input++;
  }
}

const result = findHashPrefix("00000");
console.log(`Input: ${result.input}`);
console.log(`hash: ${result.hash}`);

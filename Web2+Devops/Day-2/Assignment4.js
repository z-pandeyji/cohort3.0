// Write an if/else statement that checks if a number is even or odd. 
// If it's even, print "The number is even." Otherwise, print "The number is odd."

function checkEvenAndOdd(number) {
    if (!Number.isInteger(number)) {
        return "Input must be an integer.";
    }
    return (number % 2 === 0) ? "Even" : "Odd";
}

const evenVal = checkEvenAndOdd(24);
const oddVal = checkEvenAndOdd(3);

console.log(evenVal);
console.log(oddVal);

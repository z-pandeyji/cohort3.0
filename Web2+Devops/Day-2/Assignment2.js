// Write a function sum that finds the sum of two numbers. 
// Side quest - Try passing in a string instead of a number and see what happens?
// on Passing the string it will only add the both two value not sum up those values.

function addTwoNum(a,b) {
    const totalSum = a + b;
    return totalSum;
}

const withoutStr = addTwoNum(4,5); // Output: 9
const withStr = addTwoNum("7","8"); // output: 78
console.log(withoutStr);
console.log(withStr);
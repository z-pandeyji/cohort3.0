// Write a function that takes an array of numbers as input, and returns a new array with only even values. 
// Read about filter in JS

const arr = [24, 35, 33, 55, 65, 76, 99];

function separateEvenAndOdd(arr) {
    const evenArr = arr.filter(num => num % 2 === 0);
    const oddArr = arr.filter(num => num % 2 !== 0);
    
    return { evenArr, oddArr };
}

const { evenArr, oddArr } = separateEvenAndOdd(arr);
console.log('Even values:', evenArr);
console.log('Odd values:', oddArr);



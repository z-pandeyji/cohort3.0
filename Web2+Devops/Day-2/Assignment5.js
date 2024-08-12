// Write a function called sum that finds the sum from 1 to a number

function sum(number) {
    let totalSum = 0;
    // for (let i = 1; i <= number; i++) {
    //   totalSum += i;
    // }
    let i = 1;
    while(i <= number){
        totalSum += i;
        i++;
        }
    return totalSum;
  }
  
  const sumVal = sum(2);
  console.log(sumVal); // Output: 15
  
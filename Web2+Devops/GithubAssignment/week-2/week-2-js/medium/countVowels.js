/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
   const vowel = ['a', 'e', 'i', 'o', 'u'];
  const strVal = str.toLowerCase().split("");
  const value = strVal.filter(elem => vowel.includes(elem)).length;
    // console.log(value);
    return value;
}

// const val = "a e o y!";

// countVowels(val);

module.exports = countVowels;
/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const lowercaseStr = str.toLowerCase();
  const filteredStr = lowercaseStr.split('').filter((char) => (char !== '?' && char !== ' ' && char !== '!' && char !== '.' && char !== ',')).join('');
  // console.log(filteredStr);
  const reversedStr = filteredStr.split('').reverse().join('');
  // console.log(reversedStr);
  return filteredStr === reversedStr;
}

// const val = isPalindrome("ex e");

// console.log(val);

module.exports = isPalindrome;

/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
*/

function validPalindrome(str){
  let lower = str.toLowerCase();
  let clean = lower.replace(/[\W_]/g,'');
  let reversed = clean.split('').reverse().join('');
  return reversed === clean;
}

const input = "race a car";
console.log(validPalindrome(input))
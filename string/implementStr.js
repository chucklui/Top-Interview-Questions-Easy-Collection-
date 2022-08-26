/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

Input: haystack = "hello", needle = "ll"
Output: 2

Input: haystack = "aaaaa", needle = "bba"
Output: -1
*/

function implementStr(haystack, needle){
  if(needle.length === 0)return 0;
  if(haystack.length < needle.length) return -1;
  let left = 0;
  let right = 0;

  while(left < haystack.length && right < needle.length){
    if(haystack[left] === needle[right]){
      left++;
      right++;
    }else{
      left++;
      left = left - right;
      right = 0;
    }
  }

  if(right === needle.length) return left - right;
  return -1;
}

const input1 = 'aaaaa';
const input2 = 'bba';
console.log(implementStr(input1, input2));
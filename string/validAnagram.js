/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false
*/
function validAnagram(str1, str2){
  let freq = {};
  for(let s of str1){
    freq[s] = (freq[s] || 0) + 1;
  }
  for(let s of str2){
    if(s in freq){
      if(freq[s] > 0){
        freq[s]--;
      }else{
        return false;
      }
    }else{
      return false;
    }
  }
  return true;
}

const input = 'rat';
const input2 = 'car';
console.log(validAnagram(input, input2));
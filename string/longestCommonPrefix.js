/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Input: strs = ["flower","flow","flight"]
Output: "fl"

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/

function longestCommonPrefix(arr){
  //need to find the shortest word
  let shortestWord;
  let length = 0;
  for(let w of arr){
    if(w.length > length){
      length = w.length;
      shortestWord = w;
    }
  }
  let result = '';
  for(let i=0; i<shortestWord.length; i++){
    let character = shortestWord[i];
    const isCommon = arr.every(word => {
      return word[i] === character;
    });
    if(isCommon){
      result += character;
    }else{
      return result;
    }
  }
}

const input = ["flower","flow","flight"];
console.log(longestCommonPrefix(input))
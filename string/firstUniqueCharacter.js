/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Input: s = "leetcode"
Output: 0

Input: s = "loveleetcode"
Output: 2

Input: s = "aabb"
Output: -1
*/

function firstUniqueCharacter(str){
  let freq = new Map();
  for(let i=0; i<str.length; i++){
    if(freq.has(str[i])){
      let obj = freq.get(str[i]);
      obj.count+=1;
      freq.set(str[i], obj);
    }else{
      let temp = {
        count: 1,
        index: i
      };
      freq.set(str[i],temp);
    }
  }
  
  for(let obj of freq.values()){
    if(obj.count === 1){
      return obj.index;
    }
  }
  return -1;
}

const input = "aabb";
console.log(firstUniqueCharacter(input));
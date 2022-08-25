/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Input: nums = [1,2,3,1]
Output: true

Input: nums = [1,2,3,4]
Output: false
*/

function containDuplicate(arr){
  let unique = new Set();
  for(let n of arr){
    if(unique.has(n)){
      return true;
    }else{
      unique.add(n);
    }
  }

  return false;
}

const input = [1,2,3,4];
console.log(containDuplicate(input));
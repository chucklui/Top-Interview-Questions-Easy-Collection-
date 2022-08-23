/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Input: nums = [2,2,1]
Output: 1

Input: nums = [4,1,2,1,2]
Output: 4
*/

function singleNumber(arr){
  let result;
  for(let n of arr){
    result ^= n;
  }
  return result;
}

const input = [4,1,2,1,2];
console.log(singleNumber(input));
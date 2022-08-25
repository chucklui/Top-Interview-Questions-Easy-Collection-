/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,2,4], target = 6
Output: [1,2]

Input: nums = [3,3], target = 6
Output: [0,1]
*/

function twoSum(arr, target){
  let obj = {};
  for(let i=0; i<arr.length; i++){
    let diff = target - arr[i];
    if(arr[i] in obj){
      return [obj[arr[i]], i];
    }else{
      obj[diff] = i;
    }
  }
}

const input = [3,3];
const input2 = 6;
console.log(twoSum(input, input2));

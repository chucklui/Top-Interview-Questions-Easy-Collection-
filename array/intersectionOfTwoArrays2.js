/*
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
*/

function intersect(num1, num2){
  let freq = {};
  let result = [];

  for(let n of num1){
    freq[n] = (freq[n] || 0) + 1;
  }

  for(let n of num2){
    if(n in freq){
      if(freq[n] > 0){
        result.push(n);
        freq[n]--;
      }
    }
  }
  return result;
}

const input1 = [4,9,5];
const input2 = [9,4,9,8,4];
console.log(intersect(input1, input2));

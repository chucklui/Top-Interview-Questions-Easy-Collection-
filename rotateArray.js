/* Given an array, rotate the array to the right by k steps, where k is non-negative.

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/

function rotateArray(arr, k){
  //k is the index where it should should cut at
  k = k % arr.length;
  arr.reverse();
  reverseArr(arr, 0, k-1);
  reverseArr(arr, k, arr.length - 1);
  return arr;
}

//helper fn
function reverseArr(arr, left, right){
  while(left < right){
    [arr[left],arr[right]] = [arr[right],arr[left]];
    left++;
    right--;
  }
}

const input = [1,2,3,4,5,6,7];
const steps = 3;
console.log(rotateArray(input, steps))

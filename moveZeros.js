/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Input: nums = [0]
Output: [0]
*/

// //naive solution
// function moveZeros(arr){
//   for(let i=0; i<arr.length; i++){
//     if(arr[i] === 0){
//       let zero = arr.splice(i,1);
//       arr.push(...zero);
//     }
//   }
//   console.log(arr);
//   return arr;
// }


//better solution
function moveZeros(arr){
  let indexAtZero = 0;
  for(let i=0; i<arr.length; i++){
    if(arr[i] !== 0){
      arr[indexAtZero] = arr[i];
      indexAtZero++;
    }
  }
  for(let j=indexAtZero; j<arr.length; j++){
    arr[j] = 0;
  }
  return arr;
}
const input = [0,1,0,3,12];
console.log(moveZeros(input));
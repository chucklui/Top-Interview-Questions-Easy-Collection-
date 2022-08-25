/*
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Input: matrix = 
[[1,2,3],
 [4,5,6],
 [7,8,9]]
Output: 
[[7,4,1],
 [8,5,2],
 [9,6,3]]
*/

function rotateImage(board){
  //first transpore the array 
  //means switch the bottom left values with top right
  board = transpose(board);
  //then reverse every row to get the finished rotated array @90 degrees
  for(let row of board){
    row = row.reverse();
  }
  return board;
}

const transpose = (arr) => {
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<i; j++){
      [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]];
    }
  }
  return arr;
}
const input = [[1,2,3],[4,5,6],[7,8,9]];
console.log(rotateImage(input));
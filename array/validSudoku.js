/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

Example 1:
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Example 2:
Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

*/
function isUnique(arr){
  let unique = new Set();
  for(let n of arr){
    if(n === '.') continue;
    if(unique.has(n)){
      return false;
    }else{
      unique.add(n);
    }
  }
  return true;
}

function validSudoku(board){
  //vertical
  for(let row=0; row<board.length; row++){
    let temp = [];
    for(let col=0; col<board.length; col++){
      temp.push(board[col][row]);
    }
    console.log(temp)
    if(!isUnique(temp)) return false;  
  }

  //horizontal
  for(let row=0; row<board.length; row++){
    if(!isUnique(board[row])) return false;
  }

  //sub-boxes
  let rows = [0,1,2];
  for(let i=0; i<3; i++){
    let temp1 = [];
    let temp2 = [];
    let temp3 = [];
    for(let j=0; j<3; j++){
      const arr = board[rows[j]];
      temp1.push(...arr.slice(0,3));
      temp2.push(...arr.slice(3,6));
      temp3.push(...arr.slice(6));
      rows[j] += 3;
    }
    if(!isUnique(temp1)) return false;
    if(!isUnique(temp2)) return false;
    if(!isUnique(temp3)) return false;
  }
  
  return true;
}

const input = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];
console.log(validSudoku(input));
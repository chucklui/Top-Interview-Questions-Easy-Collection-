/*

Solution
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Input: root = [1,2,2,3,4,4,3]
Output: true

Input: root = [1,2,2,null,3,null,3]
Output: false
*/
function symmetricTree(root){
  if(!node) return true;
  return dfs(root.left, root.right);
}

function dfs(left, right){
  if(left === null && right === null) return true;
  if((!left && right) || (!right && left) || (right.val !== left.val)){
    return false;
  }
  return dfs(left.left, right.right) && dfs(left.right, right.left);
}
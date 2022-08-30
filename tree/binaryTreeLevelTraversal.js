/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
*/
function binaryTreeLevelTraversal(root){
  const result = [];
  if(!root) return result;
  let que = [root];
  while(que.length){
      let level = [];
      let newQue = [];
      for(let node of que){
          level.push(node.val);
          if(node.left) newQue.push(node.left);
          if(node.right) newQue.push(node.right);
      }
      que = newQue;
      result.push(level);
  }
  return result;
}
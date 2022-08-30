/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Input: root = [3,9,20,null,null,15,7]
Output: 3

Input: root = [1,null,2]
Output: 2
*/

function maximumDepthBST(root){
  return findDepth(root);
}

function findDepth(node){
  if(!node) return 0;

  let left = findDepth(node.left);
  let right = findDepth(node.right);
  return Math.max(1+left,1+right);
}
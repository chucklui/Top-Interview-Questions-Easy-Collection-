/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Input: root = [2,1,3]
Output: true

Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
*/
function validateBST(root){
  return isBST(root,null,null);
}

function isBST(node,min,max){
  if(!node) return true;
  if((max !== null && node.val >= max) || (min !== null && node.val <= min)){
    return false;
  }
  return isBST(node.left,min,node.val) && isBST(node.right,node.val,max);
}

/*
Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:
*/
function sortedArrayToBST(nums, left=0, right=nums.length-1){
  if(left > right) return null;
  let mid = Math.floor((left+right) / 2);
  const node = new TreeNode(nums[mid]);
  node.left = sortedArrayToBST(nums, left, mid-1);
  node.right = sortedArrayToBST(nums, mid+1, right);
  return node;
}
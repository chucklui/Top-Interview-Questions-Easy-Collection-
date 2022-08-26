/*
Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.

It is guaranteed that the node to be deleted is not a tail node in the list.

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

Input: head = [4,5,1,9], node = 1
Output: [4,5,9]
Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.
*/

function ListNode(val){
  this.val = val;
  this.next = null;
}

const node1 = new ListNode(4);
const node2 = new ListNode(5);
const node3 = new ListNode(1);
const node4 = new ListNode(9);
node1.next = node2;
node2.next = node3;
node3.next = node4;

function deleteNodeInLL(node){
  node.val = node.next.val;
  node.next = node.next.next;
  return node;
}

console.log(deleteNodeInLL(node2));
console.log(node1)
/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Input: head = [1,2]
Output: [2,1]

Input: head = []
Output: []
*/
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function reverseLL(head){
  let reversed = null;
  while(head){
    let temp = head.next;
    head.next = reversed;
    reversed = head;
    head = temp;
  }
  return reversed;
}
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
console.log(reverseLL(node1));
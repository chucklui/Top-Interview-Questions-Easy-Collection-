/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Input: head = [1], n = 1
Output: []

Input: head = [1,2], n = 1
Output: [1]
*/
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function removeNodeFromEnd(root, n){
  let dummy = new ListNode();
  dummy.next = root;
  let end = root;
  let front = dummy;

  while(n > 0){
    n--;
    end = end.next;
  }
  while(end){
    end = end.next;
    front = front.next;
  }
  front.next = front.next.next;
  return dummy.next;
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
const input2 = 1;
console.log(removeNodeFromEnd(node1, input2));



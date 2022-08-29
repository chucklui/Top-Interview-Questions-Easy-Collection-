/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Input: list1 = [], list2 = []
Output: []

Input: list1 = [], list2 = [0]
Output: [0]
*/

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function mergeTwoSortedLists(list1, list2){
  let dummy = new ListNode();
  let dummy2 = dummy;

  while(list1 && list2){
    if(list1.val < list2.val){
      dummy2.next = list1;
      list1 = list1.next;
    }else{
      dummy2.next = list2;
      list2 = list2.next;
    }
    dummy2 = dummy2.next;
  }

  if(list1){
    dummy2.next = list1;
  }
  if(list2){
    dummy2.next = list2;
  }

  return dummy.next;
}
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node4 = new ListNode(4);
node1.next = node2;
node2.next = node4;

const node_1 = new ListNode(1);
const node_3 = new ListNode(3);
const node_4 = new ListNode(4);
const node_5 = new ListNode(5);

node_1.next = node_3;
node_3.next = node_4;
node_4.next = node_5;

console.log(mergeTwoSortedLists(node1, node_1));
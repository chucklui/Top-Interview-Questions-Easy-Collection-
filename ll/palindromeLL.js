/*
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Input: head = [1,2,2,1]
Output: true

Input: head = [1,2]
Output: false
*/

// //naive solution
// function palindromeLL(head){
//   let arr = [];
//   while(head){
//     arr.push(head.val);
//     head = head.next;
//   }
//   let reversed = [...arr].reverse();
//   return arr.join('') === reversed.join('');
// }

//constant space solution
function palindromeLL(head){
  let slow = head;
  let fast = head;
  //get to the mid point
  while(fast && fast.next){
    fast = fast.next.next;
    slow = slow.next;
  }

  //reversed the 2nd half ll
  let prev = null;
  while(slow){
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  //now compared the values 
  let left = head;
  let right = prev;
  while(right){
    if(left.val !== right.val) return false;
    left = left.next;
    right = right.next;
  }
  
  return true;
}
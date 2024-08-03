/* Feature Request -> 1 :
    Add Two Numbers Script:
        - Write a script that includes a function to solve the "Add Two Numbers" problem and logs the sum as a linked list.
*/

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Adds two numbers represented by linked lists.
 * @param {ListNode} l1 - First linked list.
 * @param {ListNode} l2 - Second linked list.
 * @return {ListNode} - The sum as a linked list.
 */

const addTwoNumbers = (l1, l2) => {
  let dummyHead = new ListNode(0);
  let p = l1,
    q = l2,
    current = dummyHead;
  let carry = 0;

  while (p !== null || q !== null) {
    let x = p !== null ? p.val : 0;
    let y = q !== null ? q.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (p !== null) p = p.next;
    if (q !== null) q = q.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
};

const createLinkedList = (arr) => {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  arr.forEach((num) => {
    current.next = new ListNode(num);
    current = current.next;
  });
  return dummyHead.next;
};

const printLinkedList = (list) => {
  let arr = [];
  while (list !== null) {
    arr.push(list.val);
    list = list.next;
  }
  console.log(arr.join(" -> "));
};

// Test cases
let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);
let sumList = addTwoNumbers(l1, l2);
printLinkedList(sumList); // Output: 7 -> 0 -> 8

l1 = createLinkedList([0]);
l2 = createLinkedList([0]);
sumList = addTwoNumbers(l1, l2);
printLinkedList(sumList); // Output: 0

l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
l2 = createLinkedList([9, 9, 9, 9]);
sumList = addTwoNumbers(l1, l2);
printLinkedList(sumList); // Output: 8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1

// 7 -> 0 -> 8
// 0
// 8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1

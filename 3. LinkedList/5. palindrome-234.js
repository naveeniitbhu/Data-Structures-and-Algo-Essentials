/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || head.next === null) return true;

  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // now slow is the middle node
  let reverseSecondHalf = reverse(slow) // second alwasy <= head elems
  while (reverseSecondHalf) {
    if (reverseSecondHalf.val !== head.val) {
      return false
    }
    reverseSecondHalf = reverseSecondHalf.next;
    head = head.next;
  }
  return true
};

function reverse(head) {
  let curr = head;
  let prev = null;

  while (curr) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
}
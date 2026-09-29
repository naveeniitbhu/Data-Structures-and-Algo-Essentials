// 142

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let m = new Map()
  let curr = head;
  let index = 0;
  while (curr !== null) {
    if (m.has(curr)) {
      return curr
    } else {
      m.set(curr, index);
      index++;
      curr = curr.next;
    }
  }
  return null
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle2 = function (head) {
  if (head == null || head.next == null) return null;

  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      let entry = head;
      while (entry != slow) {
        entry = entry.next;
        slow = slow.next
      }
      return entry
    }
  }
  return null;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function (head) {
  let current = head;

  while (current && current.next) {
    if (current.val === current.next.val) {
      // Skip the next node
      current.next = current.next.next;
    } else {
      // Move to the next distinct node
      current = current.next;
    }
  }

  return head;
};

var deleteDuplicates2 = function (head) {
  if (!head || head.next == null) return head;
  let p = head;
  let q = head.next;
  while (q != null) {
    if (p.val == q.val) {
      q = q.next;
      p.next = q;
    } else {
      p = p.next;
      q = q.next;
    }
  }
  return head;
};
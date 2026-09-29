// 109
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (!head) return null;
  if (head.next == null) return new TreeNode(head.val);

  let slow = head;
  let fast = head;
  let slow_prev = null;

  while (fast != null && fast.next != null) {
    slow_prev = slow;
    slow = slow.next;
    fast = fast.next.next;

  }
  let root = new TreeNode(slow.val);
  slow_prev.next = null;
  root.left = sortedListToBST(head);
  root.right = sortedListToBST(slow.next);
  return root
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let values = [];

  for (let i = 0; i < lists.length; i++) {
    let curr = lists[i];
    while (curr) {
      values.push(curr.val);
      curr = curr.next;
    }
  }

  values.sort((a, b) => a - b)

  let dummy = new ListNode(0);
  let tail = dummy;

  for (let val of values) {
    tail.next = new ListNode(val)
    tail = tail.next
  }

  return dummy.next
};
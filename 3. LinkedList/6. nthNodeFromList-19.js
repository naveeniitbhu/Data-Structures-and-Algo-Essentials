/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEndBetter = function (head, n) {
    let dummy = new ListNode(0, head);

    let slow = dummy;
    let fast = dummy;
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }
    while(fast != null) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;

    return dummy.next;
};

var removeNthFromEnd = function (head, n) {
  if (n === 0 || !head) return head;

  let dummy = new ListNode(0, head);
  let count = 0;
  let p = head;
  while (p != null) {
    count++;
    p = p.next;
  }
  let traverseCount = count - n;
  let q = dummy;
  while (traverseCount > 0) {
    q = q.next;
    traverseCount--;
  }
  q.next = q.next.next;
  return dummy.next;
};



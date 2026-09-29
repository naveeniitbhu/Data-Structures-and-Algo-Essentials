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

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var reverseListIterative = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev
};


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList2 = function (head) {
  if (head === null || head.next === null) return head;
  let last = reverseList2(head.next); // r gives info of last node
  head.next.next = head
  head.next = null

  return last;
};

var reverseList = function (head) {
  if (head == null || head.next == null) return head;

  let arr = [];
  while (head != null) {
    arr.push(head.val);
    head = head.next;
  }
  let dummy = new ListNode();
  let curr = dummy;

  while (arr.length > 0) {
    curr.next = new ListNode(arr[arr.length - 1])
    curr = curr.next;
    arr.pop();
  }
  return dummy.next;
};
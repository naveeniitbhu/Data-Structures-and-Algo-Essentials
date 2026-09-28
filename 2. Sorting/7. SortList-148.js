/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var sortList = function (head) {
  const arr = [];
  let dummy = head;
  while (dummy) {
    arr.push(dummy.val)
    dummy = dummy.next;
  }
  arr.sort((a, b) => a - b);

  let p = head;
  let i = 0;
  while (p) {
    p.val = arr[i]
    i++;
    p = p.next
  }
  return head
};

// T = nlogn
// S = O(n)

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
var sortList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next;
  }

  let right = slow.next;
  slow.next = null
  const left = sortList(head)
  right = sortList(right)

  return merge(left, right)
};

function merge(left, right) {
  let dummy = new ListNode(0);
  let current = dummy;
  while (left && right) {
    if (left.val < right.val) {
      current.next = left;
      left = left.next
    } else {
      current.next = right;
      right = right.next;
    }
    current = current.next;
  }
  if (left) {
    current.next = left
  } else if (right) {
    current.next = right
  }
  return dummy.next
}

// T = nlogn
// S = O(log n)

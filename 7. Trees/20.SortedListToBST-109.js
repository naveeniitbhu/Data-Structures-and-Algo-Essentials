
/*
For your reference:
const LinkedListNode = class {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

const BinaryTreeNode = class {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};
*/
/**
 * @param {LinkedListNode_int32} head
 * @return {BinaryTreeNode_int32}
 */
// PREFERRED SOLUTION
function inorder_bst(head) {
  let n = 0;
  let curr = head;
  while (curr) {
    n++;
    curr = curr.next
  }

  function solve(left, right) {
    if (left > right) return null;

    const mid = Math.floor((left + right) / 2);

    const leftChild = solve(left, mid - 1)

    const node = new BinaryTreeNode(head.value)

    node.left = leftChild
    head = head.next // getting ready for right sub tree

    const rightChild = solve(mid + 1, right)
    node.right = rightChild

    return node
  }
  return solve(0, n - 1)
}
// T - O(n)
// S - O(log n)

function sorted_list_to_bst(head) {
  if (!head) return null;
  if (!head.next) return new BinaryTreeNode(head.value);

  let prev = null;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next
  }

  prev.next = null;
  const root = new BinaryTreeNode(slow.value);

  root.left = sorted_list_to_bst(head)
  root.right = sorted_list_to_bst(slow.next)

  return root
}

// Time: O(n log n)
// Space: O(log n) recursion stack

// Level 1

// The list is split into two halves:

// Left  ≈ n/2
// Right ≈ n/2

// For each half we again find the middle.

// Cost = O(n/2) + O(n/2)
//       = O(n)
// Level 2

// Now there are 4 sublists:

// n/4, n/4, n/4, n/4

// Cost:

// O(n/4) + O(n/4) + O(n/4) + O(n/4)
// = O(n)
// Level 3
// 8 lists of size n/8

// Cost:

// 8 × O(n/8) = O(n)
// Recursion Tree
// Level 0 : O(n)
// Level 1 : O(n)
// Level 2 : O(n)
// Level 3 : O(n)
// ...

// How many levels are there?

// Since we keep splitting in half:

// n
// n/2
// n/4
// n/8
// ...
// 1

// Number of levels:
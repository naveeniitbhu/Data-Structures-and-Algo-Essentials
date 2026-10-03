
/*
For your reference:
const BinaryTreeNode = class {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};
*/
/**
 * @param {BinaryTreeNode_int32} root
 * @return {int32}
 */

// for tree and sub tree
function find_single_value_trees(root) {
  if (!root) return 0;
  let count = 0;

  function solve(node) {
    if (!node) return true;

    const left = solve(node.left)
    const right = solve(node.right)

    if (!left || !right) {
      return false
    }
    if (node.left && node.left.value !== node.value) {
      return false;
    }

    if (node.right && node.right.value !== node.value) {
      return false;
    }
    count++;
    return true
  }
  solve(root)
  return count;
}

// Time complexity: Bal- O(n) - skewed - O(n)
// Space - Bal-O(log n) - skewed -O(n)


// For overall tree
var isUnivalTree = function (root) {
  if (!root) return true;

  const value = root.val;

  function solve(node) {
    if (!node) return true;

    if (node.val !== value) return false;

    return solve(node.left) && solve(node.right)
  }

  return solve(root)
};

// Time complexity: Bal- O(n) - skewed - O(n)
// Space - Bal-O(log n) - skewed -O(n)

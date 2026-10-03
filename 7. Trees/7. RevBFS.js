/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var revBFSLeftRight = function (root) {
  if (!root) return [];

  const queue = [root];
  const result = [];

  while (queue.length) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();

      result.push(node.val);

      if (node.right) queue.push(node.right);
      if (node.left) queue.push(node.left);
    }
  }

  return result.reverse();
};

// On
// On
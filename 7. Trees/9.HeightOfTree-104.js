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
 * @return {number}
 */
var maxDepth_pre_order = function (root) {
  let maxDepthSeen = 0;

  function solve(node, depth) {
    if (!node) {
      return -1
    }
    maxDepthSeen = Math.max(depth, maxDepthSeen) // processing node before left and right.
    if (node.left) solve(node.left, depth + 1)
    if (node.right) solve(node.right, depth + 1)
  }
  solve(root, 0)
  return maxDepthSeen + 1
};

// considering edge as height so leaf height is  1 + (-1, -1) = 0;
var maxDepth_post_Order = function (root) {
  function solve(node) {
    if (!node) {
      return -1
    }
    const left = solve(node.left)
    const right = solve(node.right)

    return 1 + Math.max(left, right)

  }
  return solve(root) + 1
};

// if no of nodes is considered height, then
function solve(node) {
  if (!node) return 0;

  return 1 + Math.max(
    solve(node.left),
    solve(node.right)
  );
}

return solve(root);

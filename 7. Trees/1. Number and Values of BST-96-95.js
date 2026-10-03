/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n == 0) return [];
  return solve(1, n)
};

function solve(start, end) {
  if (start > end) {
    return [null];
  }

  const result = [];

  for (let rootVal = start; rootVal <= end; rootVal++) {
    const leftTrees = solve(start, rootVal - 1)
    const rightTrees = solve(rootVal + 1, end)

    for (const left of leftTrees) {
      for (const right of rightTrees) {
        const root = new TreeNode(rootVal)
        root.left = left;
        root.right = right;
        result.push(root)
      }
    }
  }
  return result;
}


/**
 * @param {int32} n
 * @return {int64}
 */
function how_many_bsts(n) {
  if (n == 0 || n == 1) return 1;
  let count = 0;
  for (let i = 1; i < n; i++) {
    count = count + how_many_bsts(i - 1) * how_many_bsts(n - i)
  }
  return count;
}

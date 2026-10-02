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
  if (n === 0) return [];
  return solve(1, n)
};

function solve(start, end) {
  if (start > end) return [null];
  const result = [];

  for (let rootVal = start; rootVal <= end; rootVal++) {
    const leftTrees = solve(start, rootVal - 1);
    const rightTrees = solve(rootVal + 1, end);
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

// Time: Exponential (worse than O(n · Cₙ) because subproblems are recomputed).
// Auxiliary Space: O(n) (recursion stack).
// Output Space: O(n · Cₙ).

// memo solution
var generateTrees_dp = function (n) {
  if (n === 0) return [];
  const dp = new Map();

  function solve(start, end) {
    if (start > end) return [null];

    const key = `${start}-${end}`
    if (dp.has(key)) {
      dp.get(key)
    }

    const result = [];

    for (let rootVal = start; rootVal <= end; rootVal++) {
      const leftTrees = solve(start, rootVal - 1);
      const rightTrees = solve(rootVal + 1, end);
      for (const left of leftTrees) {
        for (const right of rightTrees) {
          const root = new TreeNode(rootVal)
          root.left = left;
          root.right = right;
          result.push(root)
        }
      }
    }
    dp.set(key, result)
    return result;
  }
  return solve(1, n)
};
// Time: O(n · Cₙ)(dominated by constructing all Cₙ unique BSTs)
// Auxiliary Space: O(n²) for the memo table + O(n) recursion stack
// Output Space: O(n · Cₙ)

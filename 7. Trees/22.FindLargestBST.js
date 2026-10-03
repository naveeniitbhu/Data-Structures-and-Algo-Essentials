
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
function find_largest_bst(root) {
  if (!root) return 0;
  let ans = 0;

  function solve(node) {
    if (!node) {
      return {
        isBST: true,
        min: Infinity,
        max: -Infinity,
        size: 0
      }
    }
    const left = solve(node.left);
    const right = solve(node.right);
    if (left.isBST && right.isBST && node.value >= left.max && node.value <= right.min) {
      const size = left.size + right.size + 1;
      ans = Math.max(ans, size);
      return {
        isBST: true,
        min: Math.min(left.min, node.value),
        max: Math.max(right.max, node.value),
        size: size
      }
    }
    return {
      isBST: false,
      size: 0,
      min: -Infinity,
      max: Infinity
    };
  }
  solve(root)
  return ans
}
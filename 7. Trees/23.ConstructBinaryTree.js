
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
 * @param {list_int32} inorder
 * @param {list_int32} preorder
 * @return {BinaryTreeNode_int32}
 */
function construct_binary_tree(inorder, preorder) {
  const m = new Map()
  for (let i = 0; i < inorder.length; i++) {
    m.set(inorder[i], i)
  }
  let preIndex = 0;

  function build(left, right) {
    if (left > right) return null;

    const value = preorder[preIndex]
    preIndex++;
    const root = new BinaryTreeNode(value);
    const mid = m.get(value)
    root.left = build(left, mid - 1)
    root.right = build(mid + 1, right)
    return root;
  }

  return build(0, inorder.length - 1);
}
// Time: O(n)

// Space
// | Tree     | Stack      | HashMap | Total    |
// | -------- | ---------- | ------- | -------- |
// | Balanced | `O(log n)` | `O(n)`  | **O(n)** |
// | Skewed   | `O(n)`     | `O(n)`  | **O(n)** |

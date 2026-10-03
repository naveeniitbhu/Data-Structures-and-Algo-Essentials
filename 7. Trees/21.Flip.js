
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
 * @return {BinaryTreeNode_int32}
 */
function flip_upside_down(root) {
  if (!root || !root.left) {
    return root
  }

  const newRoot = flip_upside_down(root.left)

  root.left.left = root.right;
  root.left.right = root;
  root.left = null
  root.right = null

  return newRoot
}

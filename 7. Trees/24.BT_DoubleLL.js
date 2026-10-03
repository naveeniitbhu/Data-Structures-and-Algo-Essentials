
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
function binary_tree_to_cdll(root) {
  if (!root) return null;

  let first = null;
  let last = null;

  function inorder(node) {
    if (!node) return;

    // Process left subtree
    inorder(node.left);

    // Process current node
    if (last) {
      last.right = node;  // previous → current
      node.left = last;   // current → previous
    } else {
      first = node;       // first node in inorder
    }

    last = node;

    // Process right subtree
    inorder(node.right);
  }

  inorder(root);

  // Make it circular
  first.left = last;
  last.right = first;

  return first;

}

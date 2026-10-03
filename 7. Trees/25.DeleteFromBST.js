
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
 * @param {list_int32} values_to_be_deleted
 * @return {BinaryTreeNode_int32}
 */
function delete_from_bst(root, values_to_be_deleted) {
  values_to_be_deleted.sort();
  function solve(val, root) {
    if (!root) {
      return null;
    }

    if (val < root.value) {
      root.left = solve(val, root.left)
    } else if (val > root.value) {
      root.right = solve(val, root.right)
    } else {
      if (!root.left) {
        return root.right
      }
      if (!root.right) {
        return root.left
      }
      let temp = root.right;
      while (temp.left) {
        temp = temp.left
      }

      root.value = temp.value
      root.right = solve(temp.value, root.right)
    }
    return root
  }
  for (let i = 0; i < values_to_be_deleted.length; i++) {
    root = solve(values_to_be_deleted[i], root);
  }
  return root;
}

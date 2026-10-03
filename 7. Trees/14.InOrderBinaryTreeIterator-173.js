
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
 * @param {list_str} operations
 * @return {list_int32}
 */
function implement_tree_iterator(root, operations) {
  const stack = [];
  const result = [];

  function pushLeft(node) {
    while (node) {
      stack.push(node)
      node = node.left
    }
  }
  pushLeft(root)

  for (const op of operations) {
    if (op === 'has_next') {
      result.push(stack.length ? 1 : 0)
    } else {
      if (!stack.length) {
        result.push(0);
        continue;
      }
      const node = stack.pop()
      if (node.right) pushLeft(node.right)
      result.push(node.value)
    }
  }
  return result
}



function implement_tree_iterator(root, operations) {
  const inOrder = inOrderTraversal(root);
  const result = [];

  let j = 0;

  for (const op of operations) {
    if (op === "next") {
      if (j < inOrder.length) {
        result.push(inOrder[j]);
        j++;
      } else {
        result.push(0);
      }
    } else {
      result.push(j < inOrder.length ? 1 : 0);
    }
  }

  return result;
}

function inOrderTraversal(root) {
  const result = [];

  function solve(node) {
    if (!node) return;

    solve(node.left)
    result.push(node.value)
    solve(node.right)
  }
  solve(root)
  return result
}

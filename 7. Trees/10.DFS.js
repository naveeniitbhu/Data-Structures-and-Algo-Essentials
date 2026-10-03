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
 * @return {list_int32}
 */

function preorder(root) {
  if (!root) return [];

  const result = [];

  function solve(node) {
    if (!node) return;
    result.push(node.value)
    solve(node.left)
    solve(node.right)
  }
  solve(root)

  return result;
}

function inorder(root) {
  if (!root) return [];
  const result = [];

  function solve(node) {
    if (!node) return;

    solve(node.left)

    result.push(node.value)

    solve(node.right)
  }
  solve(root)
  return result;
}

function postorder(root) {
  if (!root) return [];

  const result = [];

  function solve(node) {
    if (!node) return;

    solve(node.left)
    solve(node.right)
    result.push(node.value)
  }
  solve(root)
  return result;
}

function postorder_without_recrusion(root) {
  const result = [];
  const stack1 = [root];
  const stack2 = [];

  while (stack1.length) {
    const node = stack1.pop()
    stack2.push(node)

    if (node.left) stack1.push(node.left)
    if (node.right) stack1.push(node.right)
  }

  while (stack2.length) {
    result.push(stack2.pop().value)
  }
  return result
}

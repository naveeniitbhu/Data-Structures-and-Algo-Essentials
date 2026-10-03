function inorder_iterative(root) {
  const stack = [];
  let node = root;

  while (node) {
    stack.push(node)
    node = node.left
  }

  const result = []

  while (stack.length) {
    const currNode = stack.pop()
    result.push(currNode.val)

    let node = currNode.right;
    while (node) {
      stack.push(node);
      node = node.left;
    }
  }
  return result

}

//cleaner solution
function inorder_iterative(root) {
  const stack = [];
  let node = root;
  const result = []

  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop()
    result.push(node.val)

    node = currNode.right;
  }
  return result

}
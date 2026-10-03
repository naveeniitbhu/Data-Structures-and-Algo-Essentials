function clone_tree(root) {
  if (!root) return null;

  const node = new BinaryTreeNode(root.value)
  node.left = clone_tree(root.left)
  node.right = clone_tree(root.right)

  return node;
}



// Using pre order as order describes when node is processed not the return
// return will always be first call



// Write post order solution
function clone_Tree_PostOrder(root) {
  if (!root) return null;

  const left = clone_Tree_PostOrder(root.left)

  const right = clone_Tree_PostOrder(root.right)

  const newNode = new BinaryTreeNode(root.value)
  newNode.left = left;
  newNode.right = right;

  return newNode
}

// write in order solution

function clone_Tree_InOrder(root) {
  if (!root) return null;

  const leftClone = clone_Tree_InOrder(root.left)
  const newNode = new BinaryTreeNode(root.value)
  newNode.left = leftClone // this can be moved to before node.right and still be correct

  const rightClone = clone_Tree_InOrder(root.right)
  newNode.right = rightClone

  return newNode

}


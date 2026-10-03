/*

class BinaryTreeNode {
  constructor(value) = {
    this.value = (value === undefined ? 0 :value),
    this.left = (left === undefined ? null : left),
    this.right = (right === undefined ? null : right),
  }
}
**/


function mirror_image(root) {
  if (!root) return;

  [root.left, root.right] = [root.right, root.left]

  mirror_image(root.left)
  mirror_image(root.right)
}
// return root if asked

// Time - O(n) as every node is visited once and each node takes O(1) time
// Spcae - O(h) i.e. O(log N) call stack space

// Below is BFS Solution

function mI_BFS(root) {
  const queue = [root]

  while (queue.length) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      [node.left, node.right] = [node.right, node.left]

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  // return root
}

// Time same
// space O(w) - width of tree
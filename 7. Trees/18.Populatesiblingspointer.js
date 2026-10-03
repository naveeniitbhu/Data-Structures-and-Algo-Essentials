// Given a binary tree, populate next_right pointers in all nodes and return the root of the tree.

// Every node will have left and right pointers as usual in a binary tree. In addition, it will have next_right pointer which will be initialized to null.

// The goal is to populate the next_right such that it points to the next node to the right at the same level of the tree.The rightmost node on every level of the tree should keep next_right == null.



// dfs solution is only for perfect binary tree
function populate_sibling_pointers(root) {
  if (!root) {
    return null;
  }

  if (root.left && root.right) {
    root.left.next_right = root.right;
    if (root.next_right) {
      root.right.next_right = root.next_right.left;
    }

  }

  populate_sibling_pointers(root.left)
  populate_sibling_pointers(root.right)

  return root;
}

// BFS soluttion

function populate_sibling_pointers(root) {
  if (!root) return null;
  const queue = [root];

  while (queue.length) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (i < levelSize - 1) {
        node.next_right = queue[0];
      } else {
        node.next_right = null;
      }

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return root
}
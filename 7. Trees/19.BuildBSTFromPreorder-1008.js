
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
 * @param {list_int32} preorder
 * @return {BinaryTreeNode_int32}
 */


// Optimal solution

function build_bst(preorder) {
  if (preorder.length === 0) return null;

  let index = 0;

  function solve(min, max) {
    if (index >= preorder.length) {
      return null;
    }

    const value = preorder[index]
    if (val < min || val > max) return null;

    index++;

    const root = new BinaryTreeNode(value);
    root.left = solve(min, val)
    root.right = solve(val, max)

    return root;
  }

  return solve(-Infinity, Infinity)
}

// T = On
// Space = O(log n) // O(n)

// Brute force
function build_binary_search_tree(preorder) {
  if (preorder.length === 0) return null;

  const root = new BinaryTreeNode(preorder[0])

  if (preorder.length === 1) return root;


  function solve(node, val) {
    if (val < node.value) {
      if (!node.left) {
        node.left = new BinaryTreeNode(val);
      } else {
        solve(node.left, val)
      }
    } else if (val > node.value) {
      if (!node.right) {
        node.right = new BinaryTreeNode(val);
      } else {
        solve(node.right, val)
      }
    }
  }
  for (let i = 1; i < preorder.length; i++) {
    solve(root, preorder[i]);
  }

  return root;
}

// Each node insertion takes O(h) and there are n nodes
// so for balanced T = n * O(log n) = nlog n
// for skewed - 1+2+....+n-1 = n(n-1)/2 = O(n2)

// output is O(n)
// balanced stack space = O(log n)
// skewed stack space = O(n)


var bstFromPreorder = function (preorder) {

  function build(start, end) {
    if (start > end) return null;

    const root = new TreeNode(preorder[start]);

    let split = start + 1;

    while (split <= end && preorder[split] < preorder[start]) {
      split++;
    }

    root.left = build(start + 1, split - 1);
    root.right = build(split, end);

    return root;
  }

  return build(0, preorder.length - 1);
};

// | Approach              | Idea                                      | Time               | Space  |
// | --------------------- | ----------------------------------------- | ------------------ | ------ |
// | **1. Insert**         | Insert each value into BST                | `O(n²)` worst case | `O(h)` |
// | **2. Scan & split**   | Find first greater element each recursion | `O(n²)` worst case | `O(h)` |
// | **3. Bounds + index** | Use BST constraints and preorder pointer  | **O(n)**           | `O(h)` |

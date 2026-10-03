
// returning Treenode
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;

  if (root === p || root === q) {
    return root
  }

  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)

  if (left && right) {
    return root
  }

  return left || right
};

// retruning value
function lca(root, a, b) {
  if (!root) return null;

  if (root === a || root === b) {
    return root.val
  }

  const left = lca(root.left, a, b)
  const right = lca(root.right, a, b)

  if (left !== null && right !== null) {
    return root.val
  }
  return left !== null ? left : right;
}

class Solution {
  constructor() { }

  lca(root, a, b) {
    if (!root) return null;

    if (root === a || root === b) {
      return root
    }

    const left = this.lca(root.left, a, b)
    const right = this.lca(root.right, a, b)

    if (left && right) {
      return root
    }
    return left || right
  }
}

const sol = new Solution();
const ans = sol.lca(root, a, b);
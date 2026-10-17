
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
 * @param {BinaryTreeNode_int32} root1
 * @param {BinaryTreeNode_int32} root2
 * @return {BinaryTreeNode_int32}
 */
function merge_two_binary_search_trees(root1, root2) {
  const arr1 = generateArrayFromBST(root1)
  const arr2 = generateArrayFromBST(root2)
  // ASC merged array
  const mergedArr = [...arr1, ...arr2].sort((a, b) => a - b)
  return inOrderTree(mergedArr)
}

function generateArrayFromBST(root) {
  const arr = [];
  function dfs(node) {
    if (!node) return;
    dfs(node.left)
    arr.push(node.value)
    dfs(node.right)

  }
  dfs(root)
  return arr
}

function inOrderTree(arr) {
  // arr is sorted
  let n = arr.length;

  function solve(left, right) {
    if (left > right) return null;
    const mid = Math.floor((left + right) / 2);
    const leftChild = solve(left, mid - 1)
    const node = new BinaryTreeNode(arr[mid])
    node.left = leftChild
    const rightChild = solve(mid + 1, right)
    node.right = rightChild

    return node

  }
  return solve(0, n - 1)
}

// Your original code
// Traverse trees: O(m+n)
// Sort merged array: O((m+n) log(m+n))
// Build BST: O(m+n)

// Overall: T - O((m+n) log(m+n))
// Space: O(m+n)


// merge arrays as below
function merge(a, b) {
  const ans = [];
  let i = 0, j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      ans.push(a[i++]);
    } else {
      ans.push(b[j++]);
    }
  }

  while (i < a.length) ans.push(a[i++]);
  while (j < b.length) ans.push(b[j++]);

  return ans;
}

// Overall: T - O((m+n))
// Space: O(m+n)
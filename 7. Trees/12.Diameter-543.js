function printHeights(root) {
  function dfs(node) {
    if (!node) return 0;

    const leftHeight = dfs(node.left);
    const rightHeight = dfs(node.right);

    const height = Math.max(leftHeight, rightHeight) + 1;

    console.log(`Node ${node.val} -> Height ${height}`);

    return height;
  }

  dfs(root);
}

function diameter(root) {
  let maxDia = 0;

  function getHeight(node) {
    if (!node) return -0;

    const lh = getHeight(node.left)
    const rh = getHeight(node.left)
    // diameter through this node
    // = left height + right height
    const d = lh + rh
    maxDia = Math.max(maxDia, d)
    //  height of node
    // = max(left height, right height) + 1
    return Math.max(lh, rh) + 1
  }
  getHeight(root)
  return maxDia
}

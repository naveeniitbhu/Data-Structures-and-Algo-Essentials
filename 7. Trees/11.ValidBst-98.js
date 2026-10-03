/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isValidBST_Inorder = function (root) {
  let prev = -Infinity

  function solve(node) {
    if (!node) return true;
    // Left
    if (solve(node.left) === false) return false
    // Root

    if (node.val <= prev) {
      return false
    }
    prev = node.val
    // Right
    return solve(node.right)
  }
  return solve(root)
};

function is_bst_pre(root) {
    function solve(node, min, max) {
        if(!node) return true;
        
        // root
        if(node.value < min || node.value > max) return false;
        // left
        const is_left_bst = solve(node.left, min, node.value)
        //right
        const is_right_bst = solve(node.right, node.value, max)
        
        return is_left_bst && is_right_bst
    }
    return solve(root, -Infinity, Infinity)
}



function postorder(root) {
  function solve(node, min, max) {
    if (!node) return true;

    const left = solve(node.left, min, node.val)
    const right = solve(node.right, node.val, max)

    const isRootValid = node.val > min && node.val < max

    return left && right && isRootValid
  }
  return solve(root, -Infinity, Infinity)
}
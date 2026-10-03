/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const level = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val)

      for (let j = 0; j < node.children.length; j++) {
        queue.push(node.children[j])
      }
    }
    result.push(level)
  }
  return result
};

// | Complexity      | Value    |
// | --------------- | -------- |
// | Time            | **O(n)** |
// | Output space    | **O(n)** |
// | Auxiliary space | **O(n)** |

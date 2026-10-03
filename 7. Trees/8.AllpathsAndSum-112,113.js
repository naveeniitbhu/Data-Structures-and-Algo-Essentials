
var hasPathSum_DFS = function (root, targetSum) {
  function solve(node, tgtSum, currSum) {
    if (!node) {
      return false;
    }
    currSum += node.val;

    if (!node.left && !node.right) {
      return currSum === tgtSum
    }
    return solve(node.left, tgtSum, currSum) || solve(node.right, tgtSum, currSum)
  }
  return solve(root, targetSum, 0)
};

// | Complexity      | Value                                                 |
// | --------------- | ----------------------------------------------------- |
// | Time            | **O(n)**                                              |
// | Auxiliary space | **O(h)** (worst case **O(n)**, balanced **O(log n)**) | // fro BFS it is always O(n)
// | Output space    | **O(1)**                                              |


function path_hasPathSum_BFS(root, k) {
  if (!root) return false;
  const queue = [[root, root.value]];

  while (queue.length > 0) {
    const [node, sum] = queue.shift();
    if (!node.left && !node.right && sum === k) {
      return true
    }
    if (node.left) {
      queue.push([node.left, sum + node.left.value])
    }
    if (node.right) {
      queue.push([node.right, sum + node.right.value])
    }
  }

  return false;
}


var pathSum_113 = function (root, targetSum) {
  const result = []
  function solve(node, slate, tgtSum, currSum) {
    if (!node) {
      return;
    }
    slate.push(node.val)
    currSum += node.val;

    if (!node.left && !node.right && currSum === tgtSum) {
      result.push([...slate])
    }
    solve(node.left, slate, tgtSum, currSum)
    solve(node.right, slate, tgtSum, currSum)
    slate.pop()
  }
  solve(root, [], targetSum, 0)
  return result
};

// T(n) = O(nlgn) if balanced, O(n) if skewed
// Aux S(n) = O(h); O(lgn) if balanced, O(n) if skewed
// Output S(n) = O(nlgn) if balanced, O(n) if skewed


function all_paths_of_a_binary_tree(root) {
  const result = [];
  const queue = [[root, [root.value]]];

  while (queue.length > 0) {
    const [node, path] = queue.shift()
    if (!node.left && !node.right) {
      result.push(path)
    }

    if (node.left) {
      queue.push([
        node.left, [...path, node.left.value]
      ])
    }
    if (node.right) {
      queue.push([
        node.right, [...path, node.right.value]
      ])
    }
  }
  return result;
}

function all_paths_sum_k(root, k) {
  const paths = []
  const result = []

  function solve(node, curr_sum) {
    if (!node) {
      return;
    }
    curr_sum += node.value;
    paths.push(node.value)

    if (!node.left && !node.right && curr_sum === k) {
      result.push([...paths])
    }

    solve(node.left, curr_sum)

    solve(node.right, curr_sum)

    paths.pop();
  }

  solve(root, 0)

  return result.length === 0 ? [[-1]] : result;
}

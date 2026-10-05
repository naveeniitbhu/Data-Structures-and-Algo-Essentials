// Recursive DFS function

/**
 * @param {int32} n
 * @param {list_list_int32} edges
 * @return {list_int32}
 */
// const n = 6;
// const edges = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5]];
function dfs_traversal(n, edges) {
  const visited = new Array(n).fill(false);
  const adj = Array.from({ length: n }, () => []);
  const result = [];

  for (const [u, v] of edges) {
    adj[u].push(v)
    adj[v].push(u)
  }

  function dfs(s) {
    visited[s] = true;
    result.push(s)
    for (let neigh of adj[s]) {
      if (!visited[neigh]) {
        dfs(neigh)
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i)
    }
  }

  return result;
}

// stack based solution
class Solution {
  dfs(adj) {
    const visited = new Array(adj.length).fill(false);
    const result = [];

    this.dfsStack(adj, visited, 0, result)

    // Loop through all nodes to handle disconnected graphs
    // for (let i = 0; i < adj.length; i++) {
    //   if (!visited[i]) {
    //     this.dfsStack(adj, visited, i, result);
    //   }
    // }

    return result
  }

  dfsStack(adj, visited, s, result) {
    const stack = [s];
    visited[s] = true;

    while (stack.length > 0) {
      const currNode = stack.pop();
      result.push(currNode)

      for (const neigh of adj[node]) {
        if (!visited[neigh]) {
          stack.push(neigh)
          visited[neigh] = true;
        }
      }
    }
  }
}

// | Algorithm | Time         | Space        |
// | --------- | ------------ | ------------ |
// | DFS       | **O(V + E)** | **O(V + E)** |
// | BFS       | **O(V + E)** | **O(V + E)** |

// Each vertex visited once and each edge examined once




// const n = 6;
// const edges = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5]];
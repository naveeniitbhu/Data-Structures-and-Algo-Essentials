function isCycleUndirected(V, edges) {
  const adj = Array.from({ length: V }, () => [])
  for (const [u, v] of edges) {
    adj[u].push(v)
    adj[v].push(u)
  }
  const visited = new Array(V).fill(false)

  function dfs(node, parent) {
    visited[node] = true
    for (const neigh of adj[node]) {
      if (!visited[neigh]) {
        if (dfs(neigh, node)) {
          return true
        }
      } else if (parent !== neigh) {
        return true
      }
    }
    return false
  }

  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      if (dfs(i, -1)) return true
    }
  }
  return false
}

/**
 * @param {number} V
 * @param {number[][]} edges
 * @returns {boolean}
 */

// Using bfs for UDG

class Solution {
  isCycle(V, edges) {
    const adj = Array.from({ length: V }, () => [])
    for (const [u, v] of edges) {
      adj[u].push(v)
      adj[v].push(u)
    }
    const visited = new Array(V).fill(false);
    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        if (this.bfs(adj, visited, i)) {
          return true
        }
      }
    }
    return false;
  }

  bfs(adj, visited, u) {
    const queue = [];
    queue.push([u, -1])
    visited[u] = true;

    while (queue.length > 0) {
      const [source, parent] = queue.shift();
      for (let neighbor of adj[source]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push([neighbor, source])
        } else if (neighbor !== parent) {
          return true
        }
      }
    }
    return false;
  }
}
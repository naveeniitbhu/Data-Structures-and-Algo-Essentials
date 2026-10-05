class Solution {
  bfs(adj) {
    const visited = new Array(adj.length).fill(false);
    const result = [];

    this.bfsTraversal(adj, visited, 0, result)
    return result;
  }

  bfsTraversal(adj, visited, s, result) {
    const queue = [];
    visited[s] = true;
    queue.push(s)

    while (queue.length > 0) {
      const curr = queue.shift()
      result.push(curr);
      for (let neighbor of adj[curr]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor)
        }
      }
    }

  }
}
// solution for bfs directed 
// and undirected same as we are using visited array


// O(V+E) without shift
// O(V2+ E) with shift becoz O(v) + O(v-1) +......

// when multiple disconnected graphs
function bfs_traversal(n, edges) {
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    graph[u].push(v)
    graph[v].push(u)
  }
  const visited = new Array(n).fill(false);
  const result = [];

  for (let start = 0; start < n; start++) {
    if (visited[start]) continue;
    const queue = [start];
    visited[start] = true;

    while (queue.length > 0) {
      const currNode = queue.shift();
      result.push(currNode)

      for (let neigh of graph[currNode]) {
        if (!visited[neigh]) {
          visited[neigh] = true;
          queue.push(neigh)
        }
      }
    }
  }

  return result;
}
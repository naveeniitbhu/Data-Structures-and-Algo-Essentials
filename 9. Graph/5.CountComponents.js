// Neetcode 

// Example:
// n = 5, edges = [[0, 1], [1, 2], [3, 4]]
// adj -> [[1], [0, 2], [1], [4], [3]]


class Solution {
  /**
   * @param {number} n
   * @param {number[][]} edges
   * @returns {number}
   */
  countComponents(n, edges) {
    const adj = Array.from({ length: n }, () => [])
    for (const [u, v] of edges) {
      adj[u].push(v)
      adj[v].push(u)
    }

    let count = 0;
    const visited = new Array(n).fill(false);
    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        count++;
        this.dfs(i, visited, adj)
      }
    }
    return count;
  }

  dfs(s, visited, adj) {
    visited[s] = true;
    for (const neigh of adj[s]) {
      if (!visited[neigh]) {
        this.dfs(neigh, visited, adj)
      }
    }
  }
}


// BFS solution

class Solution {
  /**
   * @param {number} n
   * @param {number[][]} edges
   * @returns {number}
   */
  countComponents(n, edges) {
    const adj = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
      adj[u].push(v);
      adj[v].push(u);
    }

    const visited = new Array(n).fill(false);
    let count = 0;

    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        count++;
        this.bfs(i, visited, adj);
      }
    }

    return count;
  }

  bfs(start, visited, adj) {
    const queue = [start];
    visited[start] = true;

    let front = 0;

    while (front < queue.length) {
      const node = queue[front++];

      for (const neighbor of adj[node]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
  }
}
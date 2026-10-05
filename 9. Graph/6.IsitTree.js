/**
 * @param {int32} node_count
 * @param {list_int32} edge_start
 * @param {list_int32} edge_end
 * @return {bool}
 */
function is_it_a_tree_Simpler_solution(node_count, edge_start, edge_end) {
  if (edge_start.length !== node_count - 1) { // highly imp graph is tree if it is connected and has edges=V-1
    return false;
  }

  const adj = Array.from({ length: node_count }, () => [])

  for (let i = 0; i < edge_start.length; i++) {
    adj[edge_start[i]].push(edge_end[i])
    adj[edge_end[i]].push(edge_start[i])
  }
  return isConnected(node_count, adj)
}

function isConnected(n, adj) {
  const visited = new Array(n).fill(false);

  function dfs(s) {
    visited[s] = true;
    for (const neigh of adj[s]) {
      if (!visited[neigh]) {
        dfs(neigh)
      }
    }
  }
  dfs(0)
  return visited.every(val => val === true)
}


function is_it_a_tree(node_count, edge_start, edge_end) {
  const adj = Array.from({ length: node_count }, () => [])
  for (let i = 0; i < edge_start.length; i++) {
    adj[edge_start[i]].push(edge_end[i])
    adj[edge_end[i]].push(edge_start[i])
  }
  return isConnected(node_count, adj) && !isCycle(node_count, adj)
}

function isConnected(n, adj) {
  const visited = new Array(n).fill(false);

  function dfs(s) {
    visited[s] = true;
    for (const neigh of adj[s]) {
      if (!visited[neigh]) {
        dfs(neigh)
      }
    }
  }
  dfs(0)
  return visited.every(val => val === true)
}

function isCycle(n, adj) {
  const visited = new Array(n).fill(false);

  function dfs(s, parent) {
    visited[s] = true;
    for (const neigh of adj[s]) {
      if (!visited[neigh]) {
        if (dfs(neigh, s)) {
          return true
        }
      } else if (neigh != parent) {
        return true;
      }
    }
    return false
  }
  return dfs(0, -1);
}


// Combining all in 1:
function is_it_a_tree(node_count, edge_start, edge_end) {
  const adj = Array.from({ length: node_count }, () => [])
  for (let i = 0; i < edge_start.length; i++) {
    adj[edge_start[i]].push(edge_end[i])
    adj[edge_end[i]].push(edge_start[i])
  }

  const visited = new Array(node_count).fill(false);

  function dfs(s, parent) {
    visited[s] = true;
    for (const neigh of adj[s]) {
      if (!visited[neigh]) {
        if (dfs(neigh, s)) {
          return true
        }
      } else if (neigh != parent) {
        return true;
      }
    }
    return false
  }

  return dfs(0, -1) && visited.every(val => val === true) // here dfs should be before otherwise dfs never runs and vsitedis alwasy false
}

// Building adjacency list: O(E)
// DFS: O(V + E)
// visited.every(Boolean): O(V)

// Overall:

// Time: O(V + E)
// Space: O(V + E) (adjacency list + visited array + recursion stack).
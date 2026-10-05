/**
 * @param {number} V
 * @param {number[][]} edges
 * @returns {boolean}
 */


// arrival[node] → Have we ever visited this node?
// departure[node] → Have we completely finished exploring this node?
function isCycleDirected(V, edges) {
  const adj = Array.from({ length: V }, () => [])
  for (const [u, v] of edges) {
    adj[u].push(v)
  }
  const arrival = new Array(V).fill(false)
  const departure = new Array(V).fill(false)

  function dfs(node) {
    arrival[node] = true
    for (const neigh of adj[node]) {
      if (!arrival[neigh]) {
        if (dfs(neigh)) {
          return true
        }
      } else if (!departure[neigh]) {
        return true
      }
    }
    departure[node] = true
    return false
  }

  for (let i = 0; i < V; i++) {
    if (!arrival[i]) {
      if (dfs(i)) return true
    }
  }
  return false
}


function isCycleDirected_State(V, edges) {
  const adj = Array.from({ length: V }, () => [])
  for (const [u, v] of edges) {
    adj[u].push(v)
  }
  const state = new Array(V).fill(-1)
  // 0 - arrival, 1-departure, -1 - not visited

  function dfs(node) {
    state[node] = 0
    for (const neigh of adj[node]) {
      if (state[neigh] === -1) {
        if (dfs(neigh)) {
          return true
        }
      } else if (state[neigh] === 0) {
        return true
      }
    }
    state[node] = 1
    return false
  }

  for (let i = 0; i < V; i++) {
    if (state[i] === -1) {
      if (dfs(i)) return true
    }
  }
  return false
}
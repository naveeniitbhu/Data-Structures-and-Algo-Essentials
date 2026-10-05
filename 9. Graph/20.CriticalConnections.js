function find_critical_connections(n, connections) {
  const adj = Array.from({ length: n }, () => [])
  for (const [u, v] of connections) {
    adj[u].push(v);
    adj[v].push(u);
  }
  //   disc[node] = when we first visit node
  // low[node]  = earliest discovered node reachable
  //              from this subtree
  const disc = new Array(n).fill(-1)
  const low = new Array(n).fill(-1)
  const critical = [];
  let time = 0;


  function dfs(node, parent) {
    disc[node] = time;
    low[node] = time;
    time++;

    for (const neigh of adj[node]) {
      // Don't immediately go back through the edge
      // we used to reach this node.
      if (neigh === parent) {
        continue;
      }
      if (disc[neigh] === -1) {
        dfs(neigh, node)
        low[node] = Math.min(low[node], low[neigh])
        if (low[neigh] > disc[node]) {
          critical.push([node, neigh])
        }
      } else {
        low[node] = Math.min(low[node], disc[neigh])
      }

    }
  }

  for (let i = 0; i < n; i++) {
    if (disc[i] === -1) {
      dfs(i, -1)
    }
  }
  return critical
}
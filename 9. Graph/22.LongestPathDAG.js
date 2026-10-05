function longestPathDAG(dag_nodes, dag_from, dag_to, dag_weight, from_node, to_node) {
  if (from_node === to_node) return [from_node];

  const adj = Array.from({ length: dag_nodes + 1 }, () => [])
  for (let i = 0; i < dag_from.length; i++) {
    adj[dag_from[i]].push([dag_to[i], dag_weight[i]])
  }

  // longest[node] = longest distance from index node to_node i.e. index 1:1->4, index 4: 4->4 i.e.0
  const longest = new Array(dag_nodes + 1).fill(null)

  // next[node] = next node to be taken on the path
  const next = new Array(dag_nodes + 1).fill(-1)

  function dfs(node) {
    if (node === to_node) {
      return 0;
    }
    if (longest[node] !== null) {
      return longest[node];
    }
    let maxDistance = -Infinity;

    for (const [neigh, weight] of adj[node]) {
      const distance = dfs(neigh)
      if (distance === -Infinity) {
        continue
      }
      const newDistance = weight + distance
      if (newDistance > maxDistance) {
        maxDistance = newDistance
        next[node] = neigh
      }
    }
    longest[node] = maxDistance
    return maxDistance
  }

  dfs(from_node)

  const result = []
  let node = from_node
  while (node !== -1) {
    result.push(node);

    if (node === to_node) {
      break;
    }

    node = next[node];
  }

  return result;
}
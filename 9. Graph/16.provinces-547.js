/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  const rows = isConnected.length;
  const cols = isConnected[0].length;
  const visited = new Array(n).fill(false);

  let totalProvinces = 0;

  function dfs(city) {
    visited[city] = true;
    for (let neigh = 0; neigh < n; neigh++) {
      if (!visited[neigh] && isConnected[city][neigh] === 1) {
        dfs(neigh)
      }
    }
  }

  for (let city = 0; city < n; city++) {
    if (!visited[city]) {
      totalProvinces++;
      dfs(city)
    }
  }
  return totalProvinces
};

// Time  = O(N²)
// Space = O(N)
// N cities
//  ×
// N neighbor checks per city
//  =
// N²
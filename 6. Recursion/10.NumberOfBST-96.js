// Best solution is dp
var numTrees = function (n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let nodes = 2; nodes <= n; nodes++) { // calculation n=1,2,...
    for (let root = 1; root <= nodes; root++) {
      dp[nodes] += dp[root - 1] * dp[nodes - root]
    }
  }
  return dp[n]
};

function how_many_bsts(n) {
  if (n == 0 || n == 1) return 1;
  let count = 0;
  for (let i = 1; i < n; i++) {
    count = count + how_many_bsts(i - 1) * how_many_bsts(n - i)
  }
  return count;
}

var numTrees = function (n) {
  const memo = new Array(n + 1).fill(-1);
  memo[0] = 1;
  memo[1] = 1;

  function solve(nodes) {
    let ways = 0;
    if (memo[nodes] !== -1) {
      return memo[nodes];
    }

    for (let root = 1; root <= nodes; root++) {
      let left = root - 1;
      let right = nodes - root;
      ways += solve(left) * solve(right)
    }
    memo[nodes] = ways;
    return ways

  }
  return solve(n)
};
// 1+2+3+⋯+n=2n(n+1)​=O(n2)
// Space is O(n)


// Catalan Number
// Left:  0 nodes
// Right: 2,3,4 (3 nodes)

// Ways = C₀ × C₃ = 1 × 5 = 5

// Left:  1
// Right: 3,4

// Ways = C₁ × C₂ = 1 × 2 = 2

// Left:  1,2
// Right: 4

// Ways = C₂ × C₁ = 2 × 1 = 2

// | n | Unique BSTs |
// | - | ----------: |
// | 0 |           1 |
// | 1 |           1 |
// | 2 |           2 |
// | 3 |           5 |
// | 4 |      **14** |
// | 5 |          42 |
// | 6 |         132 |


// solve(4)
// ├── solve(0), solve(3)
// ├── solve(1), solve(2)
// ├── solve(2), solve(1)
// └── solve(3), solve(0)

// solve(3)
// ├── solve(0), solve(2)
// ├── solve(1), solve(1)
// └── solve(2), solve(0)
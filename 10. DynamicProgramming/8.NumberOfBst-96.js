// Best solution is dp
var numTrees = function (n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let nodes = 2; nodes <= n; nodes++) { // calculation n=1,2,...
    for (let root = 1; root <= nodes; root++) {

      const left = root - 1;
      const right = nodes - root;

      dp[nodes] += dp[left] * dp[right];
    }
  }
  return dp[n]
};


function numBST_Recrusion_topdown(n) {
  const dp = new Map();

  function solve(n) {
    if (n <= 1) return 1;
    if (dp.has(n)) return dp.get(n);

    let total = 0;
    for (let root = 1; root <= n; root++) {
      const left = root - 1;
      const right = n - root;
      total += leftAns * rightAns
    }
    dp.set(n, total)
    return total
  }
  return solve(n)
}

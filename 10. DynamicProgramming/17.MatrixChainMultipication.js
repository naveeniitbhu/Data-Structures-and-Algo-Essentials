
/**
 * @param {list_int32} matrix_sizes
 * @return {int32}
 */
function minimum_multiplication_cost(matrix_sizes) {
  const n = matrix_sizes.length - 1;

  const dp = Array.from(
    { length: n + 1 },
    () => new Array(n + 1).fill(-1)
  );

  function solve(i, j) {

    // One matrix -> no multiplication needed
    if (i === j) {
      return 0;
    }

    // Already calculated
    if (dp[i][j] !== -1) {
      return dp[i][j];
    }

    let minCost = Infinity;

    // Try every possible split
    for (let k = i; k < j; k++) {

      const left = solve(i, k);
      const right = solve(k + 1, j);

      // Cost of multiplying the two resulting matrices
      const multiplyCost =
        matrix_sizes[i - 1] *
        matrix_sizes[k] *
        matrix_sizes[j];

      const totalCost =
        left +
        right +
        multiplyCost;

      minCost = Math.min(
        minCost,
        totalCost
      );
    }

    dp[i][j] = minCost;

    return dp[i][j];
  }

  return solve(1, n);
}

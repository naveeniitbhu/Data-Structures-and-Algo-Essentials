
/**
 * @param {int32} n
 * @param {int32} m
 * @param {list_list_int32} mat
 * @return {int32}
 */
function largest_sub_square_matrix(n, m, mat) {
  const dp = Array.from({ length: n }, () => new Array(m).fill(0))
  let maxSize = 0;

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      if (mat[r][c] === 1) {
        if (r === 0 || c === 0) {
          dp[r][c] = 1;
        } else {
          dp[r][c] = 1 + Math.min(dp[r][c - 1], dp[r - 1][c], dp[r - 1][c - 1])
        }
      }
      maxSize = Math.max(maxSize, dp[r][c]);
    }
  }
  return maxSize
}

// Time:  O(n × m)
// Space: O(n × m)
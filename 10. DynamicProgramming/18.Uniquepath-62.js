
/**
 * @param {int32} n
 * @param {int32} m
 * @return {int32}
 */
function unique_paths(n, m) {

  const dp = Array.from(
    { length: n },
    () => new Array(m).fill(0)
  );
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      if (i === n - 1 && j === m - 1) {
        dp[i][j] = 1;
        continue;
      }

      let down = 0;
      let right = 0;

      if (i + 1 < n) {
        down = dp[i + 1][j];
      }

      if (j + 1 < m) {
        right = dp[i][j + 1];
      }

      dp[i][j] = down + right;
    }
  }
  return dp[0][0]
}


function top_down(grid) {
  if (!grid || grid.length === 0) return 0;
  const rows = grid.length; // 3
  const cols = grid[0].length; // 3
  const dp = Array.from({ length: rows }, () => new Array(cols).fill(-Infinity))

  function solve(i, j) {
    if (i < 0 || i >= rows || j < 0 || j >= cols) {
      return -Infinity
    }

    if (i === rows - 1 && j === cols - 1) {
      return grid[i][j]
    }

    if (dp[i][j] !== -Infinity) {
      return dp[i][j]
    }

    let right = -Infinity;
    let down = -Infinity;

    if (i + 1 < rows) {
      right = solve(i + 1, j)
    }

    if (j + 1 < cols) {
      down = solve(i, j + 1)
    }

    dp[i][j] = grid[i][j] + Math.max(down, right);

    return dp[i][j]

  }
  return solve(0, 0)
}


function bottom_up(grid) {
  if (!grid || grid.length === 0) return 0;
  const rows = grid.length; // 3
  const cols = grid[0].length; // 3
  const dp = Array.from({ length: rows }, () => new Array(cols).fill(-Infinity))

  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j >= 0; j--) {
      if (i === rows - 1 && j === cols - 1) {
        dp[i][j] = grid[i][j]
        continue;
      }

      if (i === rows - 1) {
        dp[i][j] = grid[i][j] + dp[i][j + 1]
        continue
      }
      if (j === cols - 1) {
        dp[i][j] = grid[i][j] + dp[i + 1][j]
        continue
      }

      let right = -Infinity;
      let down = -Infinity;

      if (i + 1 < rows) {
        down = dp[i + 1][j] + grid[i][j]
      }

      if (j + 1 < cols) {
        right = dp[i][j + 1] + grid[i][j]
      }

      dp[i][j] = Math.max(down, right);
    }
  }
  return dp[0][0]
}

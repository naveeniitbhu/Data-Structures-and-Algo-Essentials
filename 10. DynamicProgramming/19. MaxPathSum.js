
/**
 * @param {list_list_int32} grid
 * @return {int32}
 */
function maximum_path_sum(grid) {
  if (!grid || grid.length === 0) return 0;
  const rows = grid.length; // 3
  const cols = grid[0].length; // 3
  let result = 0;

  function solve(i, j, currSum) {
    if (i < 0 || i >= rows || j < 0 || j >= cols) {
      return -Infinity
    }

    currSum += grid[i][j];
    if (i === rows - 1 && j === cols - 1) {
      return currSum
    }


    const right = solve(i + 1, j, currSum)
    const down = solve(i, j + 1, currSum)
    return Math.max(right, down)

  }
  return solve(0, 0, 0)
}

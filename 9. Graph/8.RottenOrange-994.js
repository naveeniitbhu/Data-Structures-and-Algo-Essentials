/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  if (!grid || grid.length == 0) return 0;

  let minutes = 0; // equivalen to level
  const rows = grid.length;
  const cols = grid[0].length;
  const queue = []; // Oranges that will spread rot in the next minute.

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        queue.push([r, c])
      }
    }
  }

  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [r, c] = queue.shift();

      if (isValid(r + 1, c, grid)) {
        queue.push([r + 1, c])
      }
      if (isValid(r - 1, c, grid)) {
        queue.push([r - 1, c])
      }
      if (isValid(r, c + 1, grid)) {
        queue.push([r, c + 1])
      }
      if (isValid(r, c - 1, grid)) {
        queue.push([r, c - 1])
      }
    }
    if (queue.length > 0) { // this is required as oranges will spread in the next min
      minutes++
    }
  }
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        return -1;
      }
    }
  }

  return minutes;
};

function isValid(r, c, grid) {
  if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] === 0 || grid[r][c] === 2) {
    return;
  }
  grid[r][c] = 2;
  return true;
}

// Time: O(m × n)
// Space: O(m × n)
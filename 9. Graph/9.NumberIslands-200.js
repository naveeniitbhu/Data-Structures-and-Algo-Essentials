/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid || grid.length === 0) return 0;

  let count = 0;
  const rows = grid.length;
  const columns = grid[0].length;
  const visited = Array.from({ length: rows }, () => new Array(columns).fill(false))

  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= rows || c >= columns || grid[r][c] === "0" ||
      visited[r][c]) {
      return
    }
    visited[r][c] = true;
    dfs(r + 1, c)
    dfs(r - 1, c)
    dfs(r, c + 1)
    dfs(r, c - 1)

    // if diagonals considered.

    // dfs(r + 1, c + 1); // Down-Right
    // dfs(r + 1, c - 1); // Down-Left
    // dfs(r - 1, c + 1); // Up-Right
    // dfs(r - 1, c - 1); // Up-Left 
  }
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (grid[r][c] === "1" && !visited[r][c]) {
        count++;
        dfs(r, c)
      }
    }
  }
  return count
};

// time = RxC
// Space = RxC
// A.S = RxC




// Another approach if we are allowed to modify the grid
var numIslands_modifyGrid = function (grid) {
  if (!grid || grid.length === 0) return 0;

  let count = 0;
  const rows = grid.length;
  const columns = grid[0].length;

  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= rows || c >= columns || grid[r][c] === "0") {
      return
    }
    grid[r][c] = "0";
    dfs(r + 1, c)
    dfs(r - 1, c)
    dfs(r, c + 1)
    dfs(r, c - 1)

    // if diagonals considered.

    // dfs(r + 1, c + 1); // Down-Right
    // dfs(r + 1, c - 1); // Down-Left
    // dfs(r - 1, c + 1); // Up-Right
    // dfs(r - 1, c - 1); // Up-Left 
  }
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (grid[r][c] === "1") {
        count++;
        dfs(r, c)
      }
    }
  }
  return count
};

// time = RxC
// Space = constant
// A.S = RxC



// Attempting with BFS

function no_of_islands_bfs(grid) {
  if (!grid || grid.length === 0) return 0;

  let count = 0;
  const rows = grid.length;
  const columns = grid[0].length;

  const visited = Array.from(
    { length: rows },
    () => new Array(columns).fill(false)
  );

  function bfs(r, c) {
    const queue = [];
    queue.push([r, c])
    visited[r][c] = "1";

    while (queue.length) {
      const [row, col] = queue.shift();

      if (row + 1 < rows && grid[row + 1][col] === "1" && !visited[row + 1][col]) {
        visited[row + 1][col] = "1"
        queue.push([row + 1, col])
      }
      if (row - 1 >= 0 && grid[row - 1][col] === "1" && !visited[row - 1][col]) {
        visited[row - 1][col] = "1"
        queue.push([row - 1, col])
      }
      if (col + 1 < columns && grid[row][col + 1] === "1" && !visited[row][col + 1]) {
        visited[row][col + 1] = "1"
        queue.push([row, col + 1])
      }
      if (col - 1 >= 0 && grid[row][col - 1] === "1" && !visited[row][col - 1]) {
        visited[row][col - 1] = "1"
        queue.push([row, col - 1])
      }
    }
  }
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (grid[r][c] === "1") {
        count++;
        bfs(r, c)
      }
    }
  }
  return count
}
// Outer loops : O(R × C)
// BFS : O(R × C)
// Total:
// O(R × C)

// O(R × C) (visited array + queue) // ignoring shift
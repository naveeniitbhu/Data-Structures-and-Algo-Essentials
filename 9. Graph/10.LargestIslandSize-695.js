
/**
 * @param {list_list_int32} grid
 * @return {int32}
 */
function max_island_size_with_island_coordinates(grid) {
  if (!grid || grid.length === 0) return 0;

  const islands = [] // eg. [ [ [0, 0],[0, 1],[1, 0],[1, 1] ] , [ [2,2] ] ]
  let maxIslandSize = 0;
  const visited = Array.from({ length: grid.length }, () => new Array(grid[0].length).fill(0))

  const rows = grid.length;
  const cols = grid[0].length;


  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 0 || visited[r][c] === 1) {
      return;
    }
    visited[r][c] = 1;
    islands[islands.length - 1].push([r, c]);

    const len = islands[islands.length - 1].length;
    maxIslandSize = Math.max(maxIslandSize, len)

    dfs(r + 1, c)
    dfs(r - 1, c)
    dfs(r, c + 1)
    dfs(r, c - 1)
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1 && !(visited[r][c] === 1)) {
        islands.push([])
        dfs(r, c)
      }
    }
  }
  return maxIslandSize;
}



/**
 * @param {list_list_int32} grid
 * @return {int32}
 */
function max_island_size(grid) {
  if (!grid || grid.length === 0) return 0;

  const islands = [] // eg. [ [ [0, 0],[0, 1],[1, 0],[1, 1] ] , [ [2,2] ] ]
  let maxIslandSize = 0;

  const visited = Array.from({ length: grid.length }, () => new Array(grid[0].length).fill(0))
  const rows = grid.length;
  const cols = grid[0].length;


  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 0 || visited[r][c] === 1) {
      return 0; // important
    }
    visited[r][c] = 1;

    return (1 +
      dfs(r + 1, c) +
      dfs(r - 1, c) +
      dfs(r, c + 1) +
      dfs(r, c - 1)
    )
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1 && !(visited[r][c] === 1)) {
        maxIslandSize = Math.max(maxIslandSize, dfs(r, c))
      }
    }
  }
  return maxIslandSize;
}

// time O(RxC)
// space
// visited array	O(R × C)
// recursion stack	O(R × C) (worst case)
// variables	O(1)

// The algorithm uses a visited matrix of size R × C, which takes O(R × C) space. In the worst case, if the entire grid is one large island, the recursive DFS call stack can also grow to O(R × C). Therefore, the overall auxiliary space complexity is O(R × C).

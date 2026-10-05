
/**
 * @param {list_list_char} grid
 * @return {list_list_int32}
 */
function find_shortest_distance_from_a_guard(grid) {
  if (!grid || grid.length === 0) return [];
  const rows = grid.length;
  const cols = grid[0].length;

  const res = Array.from({ length: rows }, () => new Array(cols).fill(-1))
  const queue = []

  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 'G') {
        res[r][c] = 0;
        queue.push([r, c]) // [ [0,0] , [3,3] ]
      }
    }
  }

  let front = 0;

  while (queue.length > front) {
    const [sr, sc] = queue[front++]
    for (const [dr, dc] of dirs) {
      const nr = sr + dr;
      const nc = sc + dc;
      if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && grid[nr][nc] === 'O' && res[nr][nc] === -1) {
        res[nr][nc] = res[sr][sc] + 1;
        queue.push([nr, nc])
      }
    }
  }
  return res
}

// Walls and Gates (almost identical to your problem)
// 01 Matrix
// Rotting Oranges
// As Far from Land as Possible
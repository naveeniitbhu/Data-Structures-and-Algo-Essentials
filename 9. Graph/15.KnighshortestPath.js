
/**
 * @param {int32} rows
 * @param {int32} cols
 * @param {int32} start_row
 * @param {int32} start_col
 * @param {int32} end_row
 * @param {int32} end_col
 * @return {int32}
 */

// solving by dfs to understand 
function find_minimum_number_of_moves_bfs(rows, cols, start_row, start_col, end_row, end_col) {
  if (start_row === end_row && start_col === end_col) {
    return 0;
  }

  const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));
  const queue = [[start_row, start_col, 0]];
  visited[start_row][start_col] = true;

  while (queue.length > 0) {
    const [r, c, moves] = queue.shift();
    const neighs = [[r + 2, c + 1], [r + 2, c - 1], [r - 2, c + 1],
    [r - 2, c - 1],
    [r + 1, c + 2],
    [r + 1, c - 2],
    [r - 1, c + 2],
    [r - 1, c - 2]
    ]

    for (const neigh of neighs) {
      const [row, col] = neigh;
      if (row >= 0 && col >= 0 && row < rows && col < cols) {
        if (!visited[row][col]) {
          if (row === end_row && col == end_col) {
            return moves + 1
          }
          visited[row][col] = true;
          queue.push([row, col, moves + 1])
        }
      }
    }
  }

  return -1
}



// solving by dfs to understand 
function find_minimum_number_of_moves(rows, cols, start_row, start_col, end_row, end_col) {
  if (start_row === end_row && start_col === end_col) {
    return 0;
  }
  let minMoves = Infinity;
  const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));

  function dfs(r, c, currMoves) {
    if (r < 0 || c < 0 || r >= rows || c >= cols) {
      return;
    }
    if (visited[r][c]) {
      return;
    }

    if (r == end_row && c == end_col) {
      minMoves = Math.min(minMoves, currMoves)
      return;
    }
    visited[r][c] = true;

    dfs(r + 2, c, currMoves + 1)
    dfs(r - 2, c, currMoves + 1)
    dfs(r, c + 2, currMoves + 1)
    dfs(r, c - 2, currMoves + 1)

    visited[r][c] = false;

  }

  dfs(start_row, start_col, 0)

  return minMoves === Infinity ? -1 : minMoves;
}

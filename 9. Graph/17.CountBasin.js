
/**
 * @param {list_list_int32} matrix
 * @return {list_int32}
 */
function find_basins(matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }
  const basinSize = new Map();
  const rows = matrix.length;
  const cols = matrix[0].length;
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ];

  // memo stores the sink value to which that coordinates water flows to
  const memo = Array.from({ length: rows }, () => new Array(cols).fill(null));

  function findSink(r, c) {
    if (memo[r][c]) {
      return memo[r][c]
    }

    let minHeight = matrix[r][c];
    let minR = r;
    let minC = c;

    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && matrix[nr][nc] < minHeight) {
        minHeight = matrix[nr][nc];
        minR = nr;
        minC = nc;
      }
    }
    if (minR === r && minC === c) {
      memo[r][c] = [r, c];
      return memo[r][c];
    }
    memo[r][c] = findSink(minR, minC);
    return memo[r][c]
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const [sr, sc] = findSink(r, c);

      const key = `${sr},${sc}`;
      basinSize.set(key, (basinSize.get(key) || 0) + 1);
    }
  }
  return [...basinSize.values()].sort((a, b) => a - b);
}

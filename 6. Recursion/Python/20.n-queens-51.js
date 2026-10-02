
/**
 * @param {int32} n
 * @return {list_list_str}
 */
function find_all_arrangements(n) {
  const board = Array.from({ length: n }, () => new Array(n).fill('-'));
  const result = [];

  function isSafe(row, col) {
    for (let r = 0; r < row; r++) {
      if (board[r][col] === 'q') {
        return false
      }
    }

    // upper right
    for (let r = row - 1, c = col + 1; r >= 0 && c < n; r--, c++) {
      if (board[r][c] === 'q') {
        return false
      }
    }

    // upper left
    for (let r = row - 1, c = col - 1; r >= 0 && c >= 0; r--, c--) {
      if (board[r][c] === 'q') {
        return false
      }
    }
    return true

  }

  function solve(row) {
    if (row === n) {
      result.push(board.map(r => r.join('')));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = 'q';
        solve(row + 1);
        board[row][col] = '-'
      }
    }
  }
  solve(0)

  return result;
}


// | Approach                | Safety Check | Overall Search      |
// | ----------------------- | ------------ | ------------------- |
// | Your current solution   | `O(n)`       | Roughly `O(n! × n)` |
// | Optimized lookup arrays | `O(1)`       | Roughly `O(n!)`     |



function find_all_arrangements(n) {
  const board = Array.from({ length: n }, () => Array(n).fill('-'));
  const result = [];

  const cols = new Array(n).fill(false);
  const diag1 = new Array(2 * n - 1).fill(false); // row - col + (n - 1)
  const diag2 = new Array(2 * n - 1).fill(false); // row + col

  function solve(row) {
    if (row === n) {
      result.push(board.map(r => r.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {

      const d1 = row - col + (n - 1);
      const d2 = row + col;

      if (cols[col] || diag1[d1] || diag2[d2]) {
        continue;
      }

      board[row][col] = 'q';
      cols[col] = true;
      diag1[d1] = true;
      diag2[d2] = true;

      solve(row + 1);

      board[row][col] = '-';
      cols[col] = false;
      diag1[d1] = false;
      diag2[d2] = false;
    }
  }

  solve(0);

  return result;
}
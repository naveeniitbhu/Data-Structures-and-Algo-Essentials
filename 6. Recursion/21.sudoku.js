
// [[...]]
// attempt optimization 1

function sudoku(board) {

  const rows = Array.from({ length: 9 }, () => Array(10).fill(false));
  const cols = Array.from({ length: 9 }, () => Array(10).fill(false));
  const boxes = Array.from({ length: 9 }, () => Array(10).fill(false));

  function isValid(row, col, num) {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num) {
        return false
      }
    }
    for (let i = 0; i < 9; i++) {
      if (board[i][col] === num) {
        return false
      }
    }

    const startRow = Math.floor(row / 3) * 3
    const startCol = Math.floor(col / 3) * 3

    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] === num) {
          return false;
        }
      }
    }
    return true;
  }

  function solve() {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isValid(row, col, num)) {
              board[row][col] = num;
              if (solve()) {
                return true;
              }
              board[row][col] = 0;
            }
          }
          return false;
        }
      }
    }
    return true
  }
  solve();
  return board;
}
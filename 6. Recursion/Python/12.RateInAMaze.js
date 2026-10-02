
const myMaze = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [0, 1, 0, 0],
  [1, 1, 1, 1]
];

let result = []

class Solution {
  ratInMaze(maze) {
    const n = maze.length;
    const result = [];

    this.solve(0, 0, [], maze, n, result);

    return result;
  }

  isSafe(r, c, maze, n) {
    return (
      r >= 0 &&
      c >= 0 &&
      r < n &&
      c < n &&
      maze[r][c] === 1
    );
  }

  solve(r, c, path, maze, n, result) {
    if (!this.isSafe(r, c, maze, n)) return;

    if (r === n - 1 && c === n - 1) {
      result.push(path.join(""));
      return;
    }

    maze[r][c] = 0;

    path.push("D");
    this.solve(r + 1, c, path, maze, n, result);
    path.pop();

    path.push("L");
    this.solve(r, c - 1, path, maze, n, result);
    path.pop();

    path.push("R");
    this.solve(r, c + 1, path, maze, n, result);
    path.pop();

    path.push("U");
    this.solve(r - 1, c, path, maze, n, result);
    path.pop();

    maze[r][c] = 1;
  }
}

// | Complexity              | Value                                                              |
// | ----------------------- | ------------------------------------------------------------------ |
// | **Time**                | **O(4^(n²))** (commonly quoted), tighter upper bound **O(3^(n²))** |
// | **Auxiliary Space**     | **O(n²)**                                                          |
// | **Extra visited space** | **O(1)** (in-place marking)                                        |

// more accurate 3^n^2
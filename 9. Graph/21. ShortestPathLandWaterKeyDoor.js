
/**
 * @param {list_str} grid
 * @return {list_list_int32}
 */
function find_shortest_path(grid) {
  const grid_modified = grid.map((str, ind) => str.split(""))
  // [[".", ".", ".", "B"], [".", "b", "#", "."], ["@", "#", "+", "."]]
  const rows = grid_modified.length; // 3
  const cols = grid_modified[0].length; // 4
  let start;
  let goal;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const ch = grid_modified[r][c]
      if (ch === "@") {
        start = [r, c];
      } else if (ch === "+") {
        goal = [r, c];
      }
    }
  }
  const queue = [];
  // row, col, keys, path
  queue.push([
    start[0],
    start[1],
    "",
    [start]
  ]);
  const visited = new Set();
  visited.add(`${start[0]},${start[1]},`);

  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]

  while (queue.length) {
    const [r, c, keys, path] = queue.shift();
    for (const [dr, dc] of dirs) {
      const nr = dr + r;
      const nc = dc + c;
      if (!isValid(nr, nc, rows, cols, grid_modified)) {
        continue;
      }
      const ch = grid_modified[nr][nc];
      if (ch === "+") {
        return [...path, [nr, nc]];
      }

      let newKeys = keys;
      if (/[a-z]/.test(ch)) {
        if (!keys.includes(ch)) {
          newKeys = keys + ch;
        }
      }

      if (/[A-Z]/.test(ch)) {
        const requiredKey = ch.toLowerCase();
        if (!keys.includes(requiredKey)) {
          continue;
        }
      }

      const state = `${nr},${nc},${newKeys}`;
      if (visited.has(state)) {
        continue;
      }

      visited.add(state);
      queue.push([
        nr,
        nc,
        newKeys,
        [...path, [nr, nc]]
      ]);
    }
  }
  return [];

}

function isValid(r, c, rows, cols, grid) {

  return (
    r >= 0 &&
    c >= 0 &&
    r < rows &&
    c < cols &&
    grid[r][c] !== "#"
  );
}




// Optimized solution for better leaning:

/**
 * @param {list_str} grid
 * @return {list_list_int32}
 */
function find_shortest_path(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ];

  let startR, startC;
  let goalR, goalC;

  // Find start and goal
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "@") {
        startR = r;
        startC = c;
      } else if (grid[r][c] === "+") {
        goalR = r;
        goalC = c;
      }
    }
  }

  /*
   * There are at most 10 keys: a-j.
   *
   * keyMask:
   *
   * a -> 0000000001
   * b -> 0000000010
   * c -> 0000000100
   * ...
   * j -> 1000000000
   *
   * A state is:
   *
   *     (row, col, keyMask)
   */

  const KEY_COUNT = 10;
  const MASKS = 1 << KEY_COUNT; // 1024

  const cells = rows * cols;
  const totalStates = cells * MASKS;

  /*
   * visited[state] tells us whether this exact
   * (row, col, keys) state has been visited.
   */
  const visited = new Uint8Array(totalStates);

  /*
   * parent[state] stores the previous state.
   *
   * This lets us reconstruct the path once we reach
   * the goal.
   */
  const parent = new Int32Array(totalStates);
  parent.fill(-2);

  /*
   * Encode:
   *
   * state = ((cell) * MASKS) + keyMask
   *
   * where:
   *
   * cell = row * cols + col
   */
  function encode(r, c, mask) {
    return ((r * cols + c) * MASKS) + mask;
  }

  function getRow(state) {
    return Math.floor(state / MASKS / cols);
  }

  function getCol(state) {
    return Math.floor((state / MASKS) % cols);
  }

  function getMask(state) {
    return state & (MASKS - 1);
  }

  // Starting state: position + no keys
  const startState = encode(startR, startC, 0);

  visited[startState] = 1;
  parent[startState] = -1;

  /*
   * BFS queue.
   *
   * We use a front pointer instead of shift().
   */
  const queue = new Int32Array(totalStates);

  let front = 0;
  let back = 0;

  queue[back++] = startState;

  while (front < back) {
    const state = queue[front++];

    const r = getRow(state);
    const c = getCol(state);
    const mask = getMask(state);

    // Goal reached
    if (r === goalR && c === goalC) {
      return reconstructPath(
        state,
        parent,
        rows,
        cols,
        MASKS
      );
    }

    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;

      // Outside grid
      if (
        nr < 0 ||
        nc < 0 ||
        nr >= rows ||
        nc >= cols
      ) {
        continue;
      }

      const ch = grid[nr][nc];

      // Water
      if (ch === "#") {
        continue;
      }

      let newMask = mask;

      /*
       * KEY
       *
       * a-j -> add corresponding bit
       */
      if (ch >= "a" && ch <= "j") {
        const bit = 1 << (ch.charCodeAt(0) - 97);
        newMask = mask | bit;
      }

      /*
       * DOOR
       *
       * A-J -> check corresponding key
       */
      if (ch >= "A" && ch <= "J") {
        const bit = 1 << (ch.charCodeAt(0) - 65);

        // Don't have the key
        if ((mask & bit) === 0) {
          continue;
        }
      }

      const nextState = encode(nr, nc, newMask);

      // Already visited this exact state
      if (visited[nextState]) {
        continue;
      }

      visited[nextState] = 1;
      parent[nextState] = state;

      queue[back++] = nextState;
    }
  }

  return [];
}


function reconstructPath(
  state,
  parent,
  rows,
  cols,
  MASKS
) {
  const path = [];

  while (state !== -1) {
    const cell = Math.floor(state / MASKS);

    const r = Math.floor(cell / cols);
    const c = cell % cols;

    path.push([r, c]);

    state = parent[state];
  }

  path.reverse();

  return path;
}
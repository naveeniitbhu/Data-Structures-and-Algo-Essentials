
function minThrows(snakes, ladders) {

  const board = new Array(101).fill(-1);
  for (const [start, end] of snakes) {
    board[start] = end;
  }

  for (const [start, end] of ladders) {
    board[start] = end;
  }
  const visited = new Array(101).fill(false);

  const queue = [[1, 0]] // sqaures and throws
  visited[1] = true;

  while (queue.length > 0) {
    const [squares, throws] = queue.shift();

    if (squares === 100) return throws;

    for (let dice = 1; dice <= 6; dice++) {
      let next = squares + dice;
      if (next > 100) continue;

      if (board[next] !== -1) {
        next = board[next];
      }
      if (!visited[next]) {
        visited[next] = true;
        queue.push([next, throws + 1])
      }
    }
  }
  return -1
}

// alterante

/**
 * @param {int32} n
 * @param {list_int32} moves
 * @return {int32}
 */
function minimum_number_of_rolls(n, moves) {
  const visited = new Array(n + 1).fill(false);

  const queue = [[1, 0]] // sqaures and throws
  visited[1] = true;

  while (queue.length > 0) {
    const [squares, throws] = queue.shift();

    if (squares === n) return throws;

    for (let dice = 1; dice <= 6; dice++) {
      let next = dice + squares;
      if (next > n) continue;
      if (moves[next - 1] !== -1) {
        next = moves[next - 1] + 1;
      }
      if (!visited[next]) {
        visited[next] = true;
        queue.push([next, throws + 1])
      }
    }
  }

  return -1;
}

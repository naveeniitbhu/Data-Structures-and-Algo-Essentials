function toh(n, from, to, aux) {
  if (n == 0) return 0;
  let count = toh(n - 1, from, aux, to)
  count++;
  count += toh(n - 1, aux, from, to)
  return count
}

console.log(toh(3, 'a', 'b', 'c'))

// 2^n -1
// TC - 2^n
// Aux space - O(n) call stack

function tower_of_hanoi(n) {
  if (n == 0) {
    return 0;
  }
  let count = tower_of_hanoi(n - 1);
  count++;
  count += tower_of_hanoi(n - 1)
  return count;
}

function tower_of_hanoi(n) {
  let ans = []

  function solve(n, from, to, aux) {
    if (n == 0) {
      ans.push([src, dest]);
      return
    }

    solve(n - 1, from, aux, to);

    ans.push([from, to])

    solve(n - 1, aux, to, from)
  }
  solve(n, 1, 3, 2);
  return ans;
}

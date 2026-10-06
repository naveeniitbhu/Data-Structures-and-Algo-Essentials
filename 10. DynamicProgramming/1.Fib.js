function fib_dp_with_Recursion(n) {
  const memo = new Map();

  function solve(n) {
    if (memo.has(n)) {
      return memo.get(n)
    }
    if (n <= 1) return n;

    memo.set(n, solve(n - 1) + solve(n - 2))

    return memo.get(n)
  }
  return solve(n)
}

// Time: O(n) (each fib(i) is computed once)
// Space: O(n) (memo + recursion stack)

// Iterative with dp:
function fib_itr_and_dp(n) {
  if (n < 0) {
    console.log('n cannot be negative');
    return -1
  }
  if (n <= 1) return n;
  const res = [0, 1]
  for (let i = 2; i <= n; i++) {
    [res[0], res[1]] = [res[1], res[0] + res[1]]
  }
  return res[1]
}
// Time is O(n)
// Space is O(1)

function fib(n) {
  if (n <= 1) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
}

// Time: O(2ⁿ)
// Space: O(n) (recursive call stack)



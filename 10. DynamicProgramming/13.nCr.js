function ncr(n, r) {
  if (r > n) return 0;
  const nums = Array.from({ length: n }, (_, i) => i + 1)
  let result = 0;
  function solve(slate, index) {
    if (slate.length === r) {
      result++;
      return;
    }
    if (slate.length > r) {
      return;
    }
    slate.push(nums[index])
    solve(slate, index + 1)
    slate.pop()
    solve(slate, index + 1)

  }
  solve([], 0)
  return result;
}

function ncr_topdown(n, r) {
  if (r > n) return 0;
  // no of ways to choose remaining from index...n-1 dp[index][remaining]
  const dp = Array.from({ length: n + 1 }, () => new Array(r + 1).fill(-1))

  function solve(index, remaining) {
    if (remaining === 0) {
      return 1;
    }
    if (index > n) {
      return 0;
    }
    if (dp[index][remaining] != -1) {
      return dp[index][remaining]
    }
    const take = solve(index + 1, remaining - 1)
    const skip = solve(index + 1, remaining)
    dp[index][remaining] = take + skip
    return dp[index][remaining];

  }
  return solve(1, r)
}


function ncr_bottom_up(n, r) {
  if (r > n) return 0;

  // dp[index][remaining]
  // Number of ways to choose `remaining`
  // numbers from index ... n

  const dp = Array.from(
    { length: n + 2 },
    () => new Array(r + 1).fill(0)
  );

  // If we need to choose 0 numbers,
  // there is exactly 1 way: choose nothing.
  for (let index = 1; index <= n + 1; index++) {
    dp[index][0] = 1;
  }

  // Fill from n down to 1
  for (let index = n; index >= 1; index--) {
    for (let remaining = 1; remaining <= r; remaining++) {
      const take = dp[index + 1][remaining - 1];
      const skip = dp[index + 1][remaining];
      dp[index][remaining] = take + skip;
    }
  }

  return dp[1][r];
}

// dp[3][2]

// We have:

// 3  4  5
// ↑
// index = 3

// We need to choose 2.

// Look only at the first available number: 3.

// There are exactly two categories of combinations:

// Category 1: Combinations that contain 3

// If we take 3, we still need:

// 2 - 1 = 1

// more number.

// And after using 3, we can only choose from:

// 4, 5

// That's:

// dp[4][1]

// So:

// dp[index + 1][remaining - 1]

// For our example:

// dp[4][1]
// Category 2: Combinations that don't contain 3

// If we don't use 3, we still need:

// 2

// numbers.

// But now we can only choose from:

// 4, 5

// That's:

// dp[4][2]

// So:

// dp[index + 1][remaining]
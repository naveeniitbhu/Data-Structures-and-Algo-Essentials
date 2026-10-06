// | Approach                       | Time     | Space      | Comments                            |
// | ------------------------------ | -------- | ---------- | ----------------------------------- |
// | Plain Recursion                | `O(2^n)` | `O(n)`     | Too slow due to repeated work       |
// | Top-down DP (Memoization)      | `O(n)`   | `O(n)`     | Good, easy to derive from recursion |
// | Bottom-up DP (Tabulation)      | `O(n)`   | `O(n)`     | No recursion overhead               |
// | Bottom-up DP (Space Optimized) | `O(n)`   | **`O(1)`** | **Best**                            |

function count_ways_to_climb(steps, n) {
  steps.sort((a, b) => a - b)
  const dp = new Array(n + 1).fill(0) // indices 0-n
  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    for (const jump of steps) {
      if (i >= jump) {
        dp[i] += dp[i - jump]
      }
    }
  }
  return dp[n];
}


function climbStairs(n) {
  const dp = new Array(n + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

function climb_bottom_up(n) {
  if (n < 0) {
    console.log('n cannot be negative');
    return -1
  }
  if (n <= 1) return 1;
  const res = [1, 1]

  for (let i = 2; i <= n; i++) {
    let temp = res[0] + res[1];
    res[0] = res[1];
    res[1] = temp;
  }
  return res[1]
}


function climb_top_down_dp(n) {
  let memo = new Map();

  function solve(currSum) {
    if (currSum === n) {
      count++;
      return
    }
    if (currSum > n) {
      return;
    }
    if (memo.has(currSum)) {
      return memo.get(currSum)
    }
    const ways = solve(currSum + 1) + solve(currSum + 2)
    memo.set(currSum, ways)

    return ways
  }
  return solve(0);
}


var climbStairs = function (n) {
  let count = 0;

  function solve(currSum) {
    if (currSum === n) {
      return 1;
    }
    if (currSum > n) {
      return 0
    }

    solve(currSum + 1)
    solve(currSum + 2)
  }
  solve(0);

  return count;
};


function climb_general(n, steps) {
  if (n < 0) return 0;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= n; i++) {
    for (const step of steps) {
      if (i - step >= 0) {
        dp[i] += dp[i - step]
      }
    }
  }
  return dp[n]
}


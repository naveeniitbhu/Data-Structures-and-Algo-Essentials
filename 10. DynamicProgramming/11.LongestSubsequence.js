// recursion solution

function longestsubsequence(nums) {
  //   index → current position in the array.
  // prevIndex → index of the previously chosen element (-1 if none has been chosen yet).
  function solve(startIndex, prevIndex) {

    if (startIndex === nums.length) {
      return 0
    }
    // skip
    const skip = solve(startIndex + 1, prevIndex)

    // take
    let take = 0
    if (prevIndex === -1 || nums[startIndex] < nums[startIndex + 1]) {
      take = 1 + solve(startIndex, startIndex)
    }
    return Math.max(take, skip)
  }
  return solve(0, -1)
}

// Time: O(2^n) (exponential, because of repeated subproblems)
// Space: O(n) (maximum recursion depth)

function lengthOfLIS(nums) {
  function solve(index) {
    // Every element alone is an LIS of length 1
    let ans = 1;
    // Try every previous element
    for (let prev = 0; prev < index; prev++) {
      if (nums[prev] < nums[index]) {
        ans = Math.max(ans, 1 + solve(prev));
      }
    }
    return ans;
  }
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result = Math.max(result, solve(i));
  }

  return result;
}

function lengthOfLIS(nums) {
  const n = nums.length;
  const dp = new Array(n).fill(1) // indices are 0 - n-1

  let result = 1;

  for (let i = 0; i < n; i++) {
    for (let prev = 0; prev < i; prev++) {
      if (nums[prev] < nums[i]) {
        dp[i] = Math.max(dp[i], 1 + dp[prev])
      }
    }
    result = Math.max(result, dp[i]);

  }
  return result
}


// | Metric    | Complexity | Reason                               |
// | --------- | ---------- | ------------------------------------ |
// | Time  | O(n²)  | Nested loops (`0 + 1 + ... + (n-1)`) |
// | Space | O(n)   | `dp` array of size `n`               |




// String
function lcs(a, b) {
  function solve(i, j) {
    if (i === a.length || j === b.length) {
      return -1
    }
    if (a[i] === b[j]) {
      return a[i] + solve(i + 1, j + 1)
    }
    const skip_a = solve(i + 1, j)
    const skip_b = solve(i, j + 1)
    return skip_a.length > skip_b.length ? skip_a : skip_b
  }
  return solve(0, 0)
}
// Time: O((n + m) × 2 ^ (n + m))
// Space: O(n + m)


function lcs(a, b) {
  const dp = Array.from(
    { length: a.length + 1 },
    () => new Array(b.length + 1).fill(null)
  );
  // LCS string of a[i...] and b[j...]

  function solve(i, j) {

    if (i === a.length || j === b.length) {
      return "";
    }

    if (dp[i][j] !== null) {
      return dp[i][j];
    }

    if (a[i] === b[j]) {
      dp[i][j] = a[i] + solve(i + 1, j + 1);
      return dp[i][j];
    }

    const skip_a = solve(i + 1, j);
    const skip_b = solve(i, j + 1);

    dp[i][j] =
      skip_a.length >= skip_b.length
        ? skip_a
        : skip_b;

    return dp[i][j];
  }

  return solve(0, 0);
}
// O(n × m)


function lcs(a, b) {
  const n = a.length;
  const m = b.length;

  // dp[i][j] = LCS string of a[0...i-1] and b[0...j-1]
  const dp = Array.from(
    { length: n + 1 },
    () => new Array(m + 1).fill("")
  );

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {

      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + a[i - 1];
      } else {
        const skipA = dp[i - 1][j];
        const skipB = dp[i][j - 1];

        dp[i][j] =
          skipA.length >= skipB.length
            ? skipA
            : skipB;
      }
    }
  }

  return dp[n][m];
}
// Maximum score difference I can achieve over the opponent.
var predictTheWinner = function (nums) {
  function solve(start, end) {
    if (start === end) {
      return nums[start];
    }

    const takeStart =
      nums[start] - solve(start + 1, end);

    const takeEnd =
      nums[end] - solve(start, end - 1);

    return Math.max(takeStart, takeEnd);
  }

  return solve(0, nums.length - 1) >= 0;
};

var predictTheWinner = function (nums) {
  const n = nums.length;

  const dp = Array.from(
    { length: n },
    () => new Array(n).fill(0)
  );

  // Base case:
  // One element → current player takes it
  for (let i = 0; i < n; i++) {
    dp[i][i] = nums[i];
  }

  // Build ranges of increasing length
  for (let len = 2; len <= n; len++) {

    for (let start = 0; start + len <= n; start++) {

      const end = start + len - 1;

      const takeStart =
        nums[start] - dp[start + 1][end];

      const takeEnd =
        nums[end] - dp[start][end - 1];

      dp[start][end] = Math.max(
        takeStart,
        takeEnd
      );
    }
  }

  return dp[0][n - 1] >= 0;
};




// Maximum total score I can collect.
function max_win(v) {
  function solve(start, end) {
    if (start > end) return 0;
    if (start === end) return v[start];
    if (start + 1 === end) return Math.max(v[start], v[end])

    const takeStart = v[start] + Math.min(solve(start + 2, end), solve(start + 1, end - 1))
    const takeEnd = v[end] + Math.min(solve(start + 1, end - 1), solve(start, end - 2))
    return Math.max(takeStart, takeEnd)
  }

  return solve(0, v.length - 1)
}

function max_win(v) {
  const n = v.length;

  const dp = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    dp[i][i] = v[i];
    if (i + 1 < n) {
      dp[i][i + 1] = Math.max(v[i], v[i + 1])
    }
  }

  for (let gap = 2; gap < n; gap++) {
    for (let start = 0; start + gap < n; start++) {
      const end = start + gap;

      const takeStart =
        v[start] +
        Math.min(
          start + 2 <= end ? dp[start + 2][end] : 0,
          start + 1 <= end - 1 ? dp[start + 1][end - 1] : 0
        );

      const takeEnd =
        v[end] +
        Math.min(
          start + 1 <= end - 1 ? dp[start + 1][end - 1] : 0,
          start <= end - 2 ? dp[start][end - 2] : 0
        );

      dp[start][end] = Math.max(takeStart, takeEnd);
    }
  }
  return dp[0][n - 1];

}

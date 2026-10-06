function solve_balanced_line_breaks(words, limit) {
  const n = words.length;
  function solve(i) {
    if (i === n) {
      return 0;
    }
    let minCost = Infinity;
    let lineLength = 0;

    for (let j = i; j < n; j++) {
      if (j === i) {
        lineLength = words[j].length;
      } else {
        lineLength += 1 + words[j].length
      }
      if (lineLength > limit) {
        break;
      }
      let currentCost = 0;

      if (j === n - 1) {
        currentCost = 0;
      } else {
        const extraSpaces = limit - lineLength;
        currentCost = extraSpaces ** 3;
      }

      const remainingCost = solve(j + 1)
      minCost = Math.min(
        minCost,
        currentCost + remainingCost
      );
    }
    return minCost;
  }
  return solve(0)
}

// Time:  O(2^n)
// Space: O(n)

function solve_balanced_line_breaks_top_down(words, limit) {
  const n = words.length;
  const dp = new Array(n + 1).fill(-1)
  // dp[i] = minimum cost for words i...n-1

  function solve(i) {
    if (i === n) {
      return 0;
    }
    if (dp[i] !== -1) {
      return dp[i]
    }
    let minCost = Infinity;
    let lineLength = 0;

    for (let j = i; j < n; j++) {
      if (j === i) {
        lineLength = words[j].length;
      } else {
        lineLength += 1 + words[j].length
      }
      if (lineLength > limit) {
        break;
      }
      let currentCost = 0;

      if (j === n - 1) {
        currentCost = 0;
      } else {
        const extraSpaces = limit - lineLength;
        currentCost = extraSpaces ** 3;
      }

      const remainingCost = solve(j + 1)
      minCost = Math.min(
        minCost,
        currentCost + remainingCost
      );
    }
    dp[i] = minCost;
    return dp[i];
  }
  return solve(0)
}

function solve_balanced_line_breaks_bottom_up(words, limit) {
  const n = words.length;
  const dp = new Array(n + 1).fill(-1)
  dp[n] = 0;

  for (let i = n - 1; i >= 0; i--) {
    let lineLength = 0;
    let minCost = Infinity;

    for (let j = i; j < n; j++) {
      if (j === i) {
        lineLength = words[j].length;
      } else {
        lineLength += 1 + words[j].length
      }
      if (lineLength > limit) {
        break;
      }
      let currentCost = 0;

      if (j === n - 1) {
        currentCost = 0;
      } else {
        const extraSpaces = limit - lineLength;
        currentCost = extraSpaces ** 3;
      }

      minCost = Math.min(
        minCost,
        currentCost + dp[j + 1]
      );
    }
  }
  return dp[0]
}

// Time: O(n²)
// Space: O(n)


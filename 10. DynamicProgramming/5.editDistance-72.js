
// Dp solution

// Cell	Meaning
// dp[0][0]	Convert "horse" → "ros"
// dp[1][0]	Convert "orse" → "ros"
// dp[2][1]	Convert "rse" → "os"
// dp[4][2]	Convert "e" → "s"
// dp[5][3]	Convert "" → ""

// Levenshtein Distance
function editDistance_dp(s1, s2) {
  const m = s1.length;
  const n = s2.length;
  // minimum operations needed to convert word1[i...] into word2[j...].
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(-1))
  for (let j = 0; j <= n; j++) {
    dp[m][j] = n - j
  }
  for (let i = 0; i <= m; i++) {
    dp[i][n] = m - i
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (s1[i] === s2[j]) {
        dp[i][j] = dp[i + 1][j + 1]
      } else {
        dp[i][j] = 1 + Math.min(dp[i][j + 1], dp[i + 1][j], dp[i + 1][j + 1])
      }
    }
  }
  return dp[0][0]
}
// T(c) = m x n
// S(c) = m x n

function editDistance_recur_top_down(s1, s2) {
  const dp = new Map();

  function solve(i, j) {
    if (i === s1.length) {
      return s2.length - j
    }

    if (j === s2.length) {
      return s1.length - i
    }
    const key = `${i},${j}`
    if (dp.has(key)) {
      return dp.get(key)
    }

    if (s1[i] === s2[j]) {
      const result = solve(i + 1, j + 1)
      dp.set(key, result)
      return result
    }

    const insert = 1 + solve(i, j + 1)
    const del = 1 + solve(i + 1, j)
    const replace = 1 + solve(i + 1, j + 1)

    const result = Math.min(insert, del, replace)
    dp.set(key, result)
    return result

  }
  return solve(0, 0)
}
// T(C)  - 3^m
// Space - m
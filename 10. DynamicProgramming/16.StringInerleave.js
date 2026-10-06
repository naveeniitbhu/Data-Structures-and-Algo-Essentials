// Strings Interleave
// You are given three strings: a, b and i, write a function that checks whether i is an interleaving of a and b. String i is said to be interleaving string a and b, if:

// len(i) = len(a) + len(b).
// i only contains characters present in a or b.
// i contains all characters of a. From a, any character a[index] should be added exactly once in i.
// i contains all characters of b. From b, any character b[index] should be added exactly once in i.
// Order of all characters in individual strings (a and b) is preserved.

// Example One
// {
// "a": "123",
// "b": "456",
// "i": "123456"
// }
// Output:

// true
// Example Two
// {
// "a": "AAB",
// "b": "AAC",
// "i": "AAAABC"
// }
// Output:

// true

function do_strings_interleave(a, b, i) {
  if (a.length + b.length !== i.length) {
    return false;
  }
  function solve(x, y) {
    if (x === a.length && y === b.length) {
      return true
    }

    const k = x + y;
    if (x < a.length && a[x] === i[k]) {
      if (solve(x + 1, y)) {
        return true
      }
    }
    if (y < b.length && b[y] === i[k]) {
      if (solve(x, y + 1)) {
        return true
      }
    }
    return false
  }
  return solve(0, 0)
}



/**
 * @param {str} a
 * @param {str} b
 * @param {str} i
 * @return {bool}
 */
function top_down(a, b, i) {
  if (a.length + b.length !== i.length) {
    return false;
  }
  const dp = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(null))
  function solve(x, y) {
    if (x === a.length && y === b.length) {
      return true
    }
    if (dp[x][y] !== null) return dp[x][y];

    const k = x + y;
    if (x < a.length && a[x] === i[k]) {
      if (solve(x + 1, y)) {
        dp[x][y] = true
        return dp[x][y]
      }
    }
    if (y < b.length && b[y] === i[k]) {
      if (solve(x, y + 1)) {
        dp[x][y] = true
        return dp[x][y]
      }
    }
    dp[x][y] = false
    return false
  }
  return solve(0, 0)
}

// Time: O(n × m)
// Space: O(n × m) = Recursion stack


function bottom_up(a, b, i) {
  const n = a.length;
  const m = b.length;

  if (n + m !== i.length) {
    return false;
  }

  const dp = Array.from(
    { length: n + 1 },
    () => new Array(m + 1).fill(false)
  );

  // Empty a and empty b form empty i
  dp[0][0] = true;

  for (let x = 0; x <= n; x++) {
    for (let y = 0; y <= m; y++) {

      if (x === 0 && y === 0) {
        continue;
      }

      const k = x + y - 1;

      // Take current character from a
      if (
        x > 0 &&
        dp[x - 1][y] &&
        a[x - 1] === i[k]
      ) {
        dp[x][y] = true;
      }

      // Take current character from b
      if (
        y > 0 &&
        dp[x][y - 1] &&
        b[y - 1] === i[k]
      ) {
        dp[x][y] = true;
      }
    }
  }

  return dp[n][m];
}
// dict = ["apple", "pen"]
// str = "penappleapplepen" // "pensapple"
function wordBreak(dict, str) {
  function solve(start) {

    if (start === str.length) {
      return true;
    }

    for (let end = start + 1; end <= str.length; end++) {
      const word = str.substring(start, end);
      if (dict.includes(word) && solve(end)) {
        return true
      }
    }
    return false

  }
  return solve(0)
}

// There are up to 2ⁿ recursive paths in the worst case because at each position you can choose to split or not split the string in many different ways.
// Each call tries up to n possible substrings.
// So the worst -case time complexity is: O(n.2^n)

function wordBreak_top_down(dict, str) {
  const dp = new Array(str.length + 1).fill(-1) // Can the suffix s[start...] be broken into dictionary words?
  function solve(start) {

    if (start === str.length) {
      return true;
    }
    if (dp[start] !== -1) {
      return dp[start]
    }

    for (let end = start + 1; end <= str.length; end++) {
      const word = str.substring(start, end);

      if (dict.includes(word) && solve(end)) {
        dp[start] = true
        return true
      }
    }
    dp[start] = false;
    return false

  }
  return solve(0) // this stores ans in dp[0]
}

// Interview answer:

// Time: O(n²)
// Space: O(n)

function bottom_up(dict, str) {
  const n = str.length;
  const dict = new Set(dict);
  // dp[i] = Can str[i...] be broken into dictionary words?
  const dp = new Array(n + 1).fill(false)
  dp[n] = true;

  for (i = n - 1; i >= 0; i--) {
    let word = ""
    for (let j = i; j < n; j++) {
      word += s[j]
      if (dict.has(word) && dp[j + 1]) {
        dp[i] = true;
        break
      }
    }
  }
  return dp[0];
}
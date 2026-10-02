/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = [];
  const path = [];

  function isPalindrome(left, right) {
    while (left < right) {
      if (s[left++] !== s[right--]) {
        return false;
      }
    }
    return true;
  }

  function solve(start) {
    if (start === s.length) {
      result.push([...path]);
      return;
    }
    for (let i = start; i < s.length; i++) {
      if (!isPalindrome(start, i)) continue;
      console.log('substring', s.substring(start, i + 1))
      path.push(s.substring(start, i + 1))
      solve(i + 1)
      path.pop();
    }

  }
  solve(0)

  return result;
};

console.log(partition("aab"))
// | Problem                                 | Time       | Aux Space                |
// | --------------------------------------- | ---------- | ------------------------ |
// | Palindrome Decomposition (your version) | `O(n·2^n)` | `O(n²)` (string version) |
// | Output space = O(n.2^n)

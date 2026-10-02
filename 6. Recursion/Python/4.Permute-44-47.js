/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = []

  function solve(slate, remaining, result) {
    if (remaining.length === 0) {
      result.push([...slate])
      return;
    }
    for (let j = 0; j < remaining.length; j++) {
      slate.push(remaining[j])
      solve(slate, [...remaining.slice(0, j), ...remaining.slice(j + 1)], result)
      slate.pop()
    }
  }
  solve([], nums, result)
  return result
};

// better solution
var permute = function (nums) {
  const result = []
  const used = Array(nums.length).fill(false)

  function solve(slate, nums, result) {
    if (nums.length === slate.length) {
      result.push([...slate])
      return;
    }
    for (let j = 0; j < nums.length; j++) {
      if (used[j]) continue;

      used[j] = true;

      slate.push(nums[j])
      solve(slate, nums, result)
      slate.pop()

      used[j] = false
    }
  }
  solve([], nums, result)
  return result
};

// T(c) - n! . n
// Space - aux is O(n) and output = n! .n


// duplicates
var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b)
  const result = [];
  const visited = new Array(nums.length).fill(false);

  function solve(slate) {
    if (slate.length === nums.length) {
      result.push([...slate])
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) {
        continue;
      }
      visited[i] = true;
      slate.push(nums[i])
      solve(slate)
      slate.pop()
      visited[i] = false;
    }
  }
  solve([])
  return result;
};
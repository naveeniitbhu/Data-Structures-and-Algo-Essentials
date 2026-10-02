/**
 * 
 * @param {string} s 
 * @returns {string[]}
 */

// Input: { "s": "aab" }
// Output: ["", "a", "aa", "aab", "ab", "b"]


function get_distinct_subsets(s) {
  const chars = s.split('').sort();
  const result = [];

  function solve(slate, index) {
    if (index === chars.length) {
      result.push(slate.join(''))
      return;
    }
    slate.push(chars[index])
    solve(slate, index + 1)
    slate.pop()

    while (index + 1 < chars.length && chars[index] === chars[index + 1]) {
      index++;
    }
    solve(slate, index + 1)
  }
  solve([], 0)
  return result;
}

// better solution
var subsets = function (nums) {
  if (nums.length === 1) return [[], nums];

  let result = [];

  function solve(slate, index) {
    if (index === nums.length) {
      result.push([...slate]);
      return;
    }
    slate.push(nums[index])
    solve(slate, index + 1)
    slate.pop()

    solve(slate, index + 1)
  }
  solve([], 0)

  return result;

};
// T = n.2^n and S = O(n)


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  function solve(slate, index) {
    if (index === nums.length) {
      result.push([...slate])
      return;
    }
    slate.push(nums[index])
    solve(slate, index + 1)
    slate.pop()

    while (index + 1 < nums.length && nums[index] === nums[index + 1]) {
      index++;
    }
    solve(slate, index + 1)
  }
  solve([], 0)
  return result;
};
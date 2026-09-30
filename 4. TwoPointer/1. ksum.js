/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} k
 * @return {number[][]}
 */
var kSum = function (nums, target, k) {
  nums.sort((a, b) => a - b);

  const helper = (start, target, k) => {
    const res = [];

    // Base Case 1: If we run out of numbers or the numbers are too large
    if (start === nums.length || nums[start] * k > target || target > nums[nums.length - 1] * k) {
      return res;
    }

    // Base Case 2: 2Sum using two pointers
    if (k === 2) {
      let left = start, right = nums.length - 1;
      while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum < target) {
          left++;
        } else if (sum > target) {
          right--;
        } else {
          res.push([nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        }
      }
      return res;
    }

    // Recursive Step: Reduce kSum to (k-1)Sum
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;

      const subsets = helper(i + 1, target - nums[i], k - 1);
      for (const subset of subsets) {
        res.push([nums[i], ...subset]);
      }
    }
    return res;
  };

  return helper(0, target, k);
};
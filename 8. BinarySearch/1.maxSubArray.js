/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function (nums, left, right) {
  if (nums.length == 0) {
    return 0;
  }
  let start = -1;
  let end = -1;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > right) {
      start = i;
      end = i;
    } else if (nums[i] >= left) {
      end = i;
    }
    result += end - start
  }
  return result
};
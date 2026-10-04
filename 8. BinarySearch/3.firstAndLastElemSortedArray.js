/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  return [findLeft(nums, target), findRight(nums, target)]
};

var findLeft = function (nums, target) {
  const len = nums.length;
  let l = 0;
  let r = len - 1;
  let res = -1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] > target) {
      r = mid - 1;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else if (nums[mid] === target) {
      res = mid;
      r = mid - 1
    }
  }
  return res
}

var findRight = function (nums, target) {
  const len = nums.length;
  let l = 0;
  let r = len - 1;
  let res = -1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] > target) {
      r = mid - 1;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else if (nums[mid] === target) {
      res = mid;
      l = mid + 1
    }
  }
  return res
}
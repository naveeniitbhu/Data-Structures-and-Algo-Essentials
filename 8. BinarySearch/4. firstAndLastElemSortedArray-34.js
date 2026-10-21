/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  function findBoundaryFirst(findFirst) {
    let l = 0
    let r = nums.length
    let ans = -1
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      if (nums[mid] === target) {
        ans = mid
        if (findFirst) {
          r = mid - 1
        } else {
          l = mid + 1
        }
      } else if (nums[mid] < target) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
    return ans
  }

  return [findBoundaryFirst(true), findBoundaryFirst(false)]
};
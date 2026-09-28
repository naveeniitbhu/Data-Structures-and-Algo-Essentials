/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // 0 -red
  // 1 - white
  // 2 -blue
  // reqd pattern  0000...1111...222..
  let b = 0;
  let r = -1;
  let w = -1;

  while (b < nums.length) {
    if (nums[b] == 2) {
      b++;
    } else if (nums[b] == 1) {
      w++;
      [nums[b], nums[w]] = [nums[w], nums[b]]
      b++;
    } else if (nums[b] == 0) {
      w++;
      [nums[b], nums[w]] = [nums[w], nums[b]];
      r++;
      [nums[r], nums[w]] = [nums[w], nums[r]]
      b++;
    }
  }
  return nums
};
// O(n)
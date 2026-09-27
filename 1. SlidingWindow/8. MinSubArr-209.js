/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  const n = nums.length;
  let minLen = Infinity;
  let currLen = 0;
  let l = 0;
  let sum = 0;

  for (let r = 0; r < n; r++) {
    const num = nums[r];
    sum += num
    currLen++
    while (sum >= target) {
      minLen = Math.min(minLen, currLen)
      const left = nums[l]
      sum -= left;
      l++;
      currLen--;
    }
  }

  return minLen === Infinity ? 0 : minLen;
};
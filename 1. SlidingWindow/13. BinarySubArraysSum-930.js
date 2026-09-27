/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  const atMost = (k) => {
    if (k < 0) return 0;
    const n = nums.length;
    let l = 0;
    let oneCount = 0;
    let result = 0;

    for (let r = 0; r < n; r++) {
      if (nums[r] === 1) {
        oneCount++
        zeroCount = 0
      }
      while (oneCount > k) {
        if (nums[l] === 1) {
          oneCount--
        }
        l++
      }
      result += r - l + 1;
    }
    return result
  }
  return atMost(goal) - atMost(goal - 1)

};

// Time - O(n)
// Space - O(1)
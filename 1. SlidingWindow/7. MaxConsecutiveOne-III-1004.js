/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    const n = nums.length;
    let maxLen = 0;
    let zeros = 0;

    let l = 0;
    for (let r = 0; r < n; r++) {
        const num = nums[r];
        if (num == 0) {
            zeros++;
        }
        if (zeros > k) {
            const left = nums[l];
            if (left === 0) {
                zeros--
            }
            l++

        }
        maxLen = Math.max(maxLen, r - l + 1)
    }
    return maxLen
};
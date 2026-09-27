/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {

    const atMost = (k) => {
        if (k < 0) return 0
        const n = nums.length;
        let result = 0;
        let l = 0;
        let oddCount = 0;

        for (let r = 0; r < n; r++) {
            if (nums[r] % 2 !== 0) {
                oddCount++
            }
            while (oddCount > k) {
                if (nums[l] % 2 !== 0) {
                    oddCount--
                }
                l++
            }
            result += r - l + 1
        }
        return result
    }
    return atMost(k) - atMost(k - 1)

};

var numberOfSubarrays = function (nums, k) {
    let l = 0
    let count = 0
    let result = 0
    let oddCount = 0

    for (let r = 0; r < nums.length; r++) {
        if (nums[r] % 2 !== 0) {
            oddCount++
            count = 0
        }
        while (oddCount === k) {
            if (nums[l] % 2 !== 0) {
                oddCount--
            }
            count++
            l++
        }


        result += count
    }
    return result
};
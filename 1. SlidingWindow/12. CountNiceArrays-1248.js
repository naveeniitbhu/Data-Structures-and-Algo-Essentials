/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
    let l = 0
    let count = 0
    let result = 0
    let oddCount = 0

    for (let r = 0; r < nums.length; r++) {
        if(nums[r] % 2 !== 0){
            oddCount++
            count = 0
        }
        while(oddCount === k){
            if(nums[l] % 2 !== 0) {
                oddCount--
            }
            count++
            l++
        }


        result += count
    }
    return result
};
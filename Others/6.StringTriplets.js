// given a string count triplets, a triplet is a string of 
// 3 letters with 1 and 3rd letter are equal. for example axA is one triplet.

/**
 * @param {string} str
 * @returns {number}
 */
function stringTriplets(str) {
  if (str.length < 3) return 0;
  let count = 0;

  for (let i = 2; i < str.length; i++) {
    const currChar = str[i].toLowerCase();
    if (currChar == str[i - 2].toLowerCase()) {
      count++
    }
  }
  return count;
}

console.log(stringTriplets('axAxAxaxbxb'))


/**
 * @param {number[]} nums
 * @returns {number}
 */
function maxReachable(nums) {
  let maxReach = 0;

  for (let i = 0; i <= maxReach && i < nums.length; i++) {
    maxReach = Math.max(maxReach, i + nums[i])
  }

  return maxReach
}

function isReachable(nums) {
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;

    maxReach = Math.max(maxReach, i + nums[i])

    if (maxReach >= nums.length - 1) return true
  }

  return true
}
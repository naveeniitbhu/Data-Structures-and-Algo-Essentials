/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  // even at beginning
  // odd at end
  let p = 0;  // exploratory var
  let q = -1; // last location of even var
  while (p < nums.length) {
    if (nums[p] % 2 == 0) {
      q++;
      [nums[p], nums[q]] = [nums[q], nums[p]]
      p++;
    } else {
      p++;
    }
  }
  return nums
};

// T(c) => O(n)
// S(c) => O(1)


// Simpler solution
var sortArrayByParity = function (nums) {
  let i = 0, j = nums.length - 1;
  while (i < j) {
    if (!isEven(nums[i])) {
      if (isEven(nums[j])) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
        i++;
        j--;
      } else {
        j--;
      }
    } else {
      i++;
    }
  }
  return nums
};

function isEven(num) {
  if (num % 2 === 0) {
    return true
  }
  return false;
}
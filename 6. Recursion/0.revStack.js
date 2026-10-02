
function reverseString(str) {
  if (str.length == 0 || str.length === 1) {
    return str;
  }

  return str.charAt(str.length - 1) + reverseString(str.substring(0, str.length - 1))
}

function revStack(nums) {
  if (nums.length <= 1) return nums;
  const revArr = revStack(nums.slice(1, nums.length))
  revArr.push(nums[0])
  return revArr
}
console.log(revStack([1, 2, 3, 4, 5]))

function reverseStack(nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    let temp = nums[l];
    nums[l] = nums[r];
    nums[r] = temp;
    l++;
    r--;
  }
  return nums
}
console.log(reverseStack([1, 2, 3, 4, 5]))

/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @returns {number[]}
 */

function reverseInPlace(nums, left = 0, right = nums.length - 1) {
  // Base Case: If pointers meet or cross, we are done
  if (left >= right) {
    return nums;
  }

  // Swap the elements at left and right
  let temp = nums[left];
  nums[left] = nums[right];
  nums[right] = temp;

  // Recursive Step: Move pointers inward
  return reverseInPlace(nums, left + 1, right - 1);
}

const arr = [1, 2, 3, 4, 5];
reverseInPlace(arr);
console.log(arr); // [5, 4, 3, 2, 1]
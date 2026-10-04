
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  const len = nums.length;
  let l = 0;
  let r = len - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] != nums[mid - 1] && nums[mid] != nums[mid + 1]) {
      return nums[mid]
    }
    if (nums[mid] == nums[mid + 1]) {
      if (mid % 2 === 0) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    } else if (nums[mid] == nums[mid - 1]) {
      if (mid % 2 === 0) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    }
  }
  return -1
};

var singleNonDuplicate2 = function (nums) {
  const len = nums.length;
  let l = 0;
  let r = len - 1;

  while (l < r) {
    const mid = Math.floor((l + r) / 2);

    // Handle mid pairing safely
    if (nums[mid] === nums[mid + 1]) {
      if (mid % 2 === 0) {
        l = mid + 2;
      } else {
        r = mid - 1;
      }
    }
    else if (nums[mid] === nums[mid - 1]) {
      if (mid % 2 === 0) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    else {
      return nums[mid]; // unique
    }
  }
  return nums[l];
};


var singleNonDuplicate3 = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (mid % 2 === 1) mid--;
    if (nums[mid] === nums[mid + 1]) {
      l = mid + 2;
    } else {
      r = mid;
    }
  }
  return nums[l];
};
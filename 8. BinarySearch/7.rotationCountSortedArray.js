var findRotationCountSortedArray = function (nums) {
  const len = nums.length;
  let l = 0;
  let r = len - 1;
  while (l < r) {
    const mid = Math.floor((l + r) / 2)
    if (nums[mid] < nums[mid + 1] && nums[mid] < nums[mid - 1]) {
      return mid
    } else if (nums[mid] > nums[mid + 1]) {
      l = mid + 1;
    } else if (nums[mid] < nums[mid + 1]) {
      r = mid - 1;
    }
  }
  return l
}

console.log(findRotationCountSortedArray([15, 18, 2, 3, 6, 12]))
console.log(findRotationCountSortedArray([12, 15, 18, 2, 3, 6]))

var findRotationCountSortedArray2 = function (nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    let mid = Math.floor((l + r) / 2);

    if (nums[mid] > nums[r]) {
      // minimum is in right half
      l = mid + 1;
    } else {
      // minimum is in left half (including mid)
      r = mid;
    }
  }

  return l; // index of minimum = rotation count
};

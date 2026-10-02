function quickSort(nums, low = 0, high = nums.length - 1) {
  if (low >= high) return;
  const pi = partition(nums, low, high)
  quickSort(nums, low, pi - 1)
  quickSort(nums, pi + 1, high)

  return nums
}

function partition(nums, low, high) {
  const pivotElem = nums[high];
  let pi = low;

  for (let i = low; i < high; i++) {
    if (nums[i] <= pivotElem) {
      [nums[i], nums[pi]] = [nums[pi], nums[i]]
      pi++
    }
  }
  [nums[pi], nums[high]] = [nums[high], nums[pi]]
  return pi
}
console.log(quickSort([3, 42, 3, 1, 5, 6, 46]))
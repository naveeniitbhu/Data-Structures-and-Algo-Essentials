function mergeSort(nums) {
  if (nums.length <= 1) return nums;
  const mid = Math.floor(nums.length / 2);
  const leftArr = nums.slice(0, mid);
  const rightArr = nums.slice(mid, nums.length)
  return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      result.push(leftArr[i])
      i++
    } else {
      result.push(rightArr[j])
      j++
    }
  }
  return result.concat(leftArr.slice(i)).concat(rightArr.slice(j))
}

console.log(mergeSort([1,4,1,4,2,5,1]))
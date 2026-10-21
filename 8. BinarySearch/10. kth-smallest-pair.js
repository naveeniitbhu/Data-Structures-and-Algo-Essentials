import { Heap } from 'heap-js'

/** 
 * @param {numbers[]} nums
 * @param {number} k
 * @return {number}
*/

function smallestDistanceBestApproach(nums, k) {
  const size = nums.length;
  nums.sort((a, b) => a - b) // nlogn T(O)
  let low = 0;
  let high = nums[size - 1] - nums[0];
  let result = 0;

  while (low <= high) { // log(M) * n(for slidin windo)
    const mid = Math.floor(low + (high - low) / 2);
    const countPair = countPairs(nums, mid);
    if (countPair < k) {
      low = mid + 1;
    } else {
      result = mid;
      high = mid - 1;
    }
  }
  return result;
}

function countPairs(nums, mid) {
  let i = 0;
  let j = 1;
  let n = nums.length;
  let pairCount = 0;

  while (j < n) {
    while (nums[j] - nums[i] > mid) {
      i++;
    }
    pairCount += j - i;
    j++;
  }
  return pairCount
}

/** 
 * @param {numbers[]} nums
 * @param {number} k
 * @return {number}
*/

function smallestDistancePairMaxHeap(nums, k) {
  const maxHeap = new Heap((a, b) => b - a);
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      maxHeap.push(Math.abs(nums[j] - nums[i]))
      if (maxHeap.size() > k) {
        maxHeap.pop()
      }
    }
  }
  return maxHeap.pop()
}


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
  let result = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      result.push(Math.abs(nums[j] - nums[i]))
    }
  }
  result.sort((a, b) => a - b)
  return result[k - 1]
};
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let p = 0;
  let q = numbers.length - 1;
  while (p < q) {
    if ((numbers[p] + numbers[q]) > target) {
      q--;
    } else if ((numbers[p] + numbers[q]) < target) {
      p++
    } else {
      return [p + 1, q + 1]
    }
  }
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (i >= 0 && nums[i] == nums[i - 1]) continue;
    if (nums[i] > 0) break;
    const tgt = 0 - nums[i];
    const start = i + 1
    twoSum2(nums, start, tgt, result, nums[i])
  }
  return result;
};

var twoSum2 = function (nums, start, target, result, firstVal) {
  let p = start;
  let q = nums.length - 1;
  while (p < q) {
    if ((nums[p] + nums[q]) > target) {
      q--;
    } else if ((nums[p] + nums[q]) < target) {
      p++;
    } else {
      result.push([firstVal, nums[p], nums[q]]);
      while (p < q && nums[p] === nums[p + 1]) p++;
      while (p < q && nums[q] === nums[q - 1]) q--;

      p++;
      q--;
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const tgtFor3sum = target - nums[i];
    const start = i + 1;
    const firstVal = nums[i];
    threeSum4(nums, start, result, firstVal, tgtFor3sum)
  }
  return result
};

var threeSum4 = function (nums, start, result, firstVal, tgtFor3sum) {
  for (let i = start; i < nums.length; i++) {
    if (i > start && nums[i] === nums[i - 1]) continue;
    const tgtFor2sum = tgtFor3sum - nums[i];
    const startForTwoSum = i + 1;
    const firstValForTwoSum = nums[i];
    twoSum4(nums, startForTwoSum, result, firstValForTwoSum, tgtFor2sum, firstVal)
  }
}

var twoSum4 = function (nums, start, result, firstValForTwoSum, tgt, firstVal) {
  let p = start;
  let q = nums.length - 1;
  while (p < q) {
    if ((nums[p] + nums[q]) > tgt) {
      q--;
    } else if ((nums[p] + nums[q]) < tgt) {
      p++;
    } else {
      result.push([firstVal, firstValForTwoSum, nums[p], nums[q]]);
      while (p < q && nums[p] == nums[p + 1]) p++;
      while (p < q && nums[q] == nums[q - 1]) q--;

      p++;
      q--;
    }
  }
}


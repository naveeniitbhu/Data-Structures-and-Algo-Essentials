var findMaxAverage = function (nums, k) {
  let avg = -Infinity;
  let maxAvg = -Infinity
  let sum = 0
  let l = 0;
  for (let r = 0; r < nums.length; r++) {
    sum += nums[r]
    if (r - l + 1 > k) {
      sum -= nums[l]
      l++
    }
    if (r - l + 1 === k) { // subArr of size k
      avg = sum / k
      maxAvg = Math.max(avg, maxAvg)
    }
  }
  return maxAvg
};

var findMaxAverage = function (nums, k) {
  let sum = 0;
  let maxSum = -Infinity;
  let l = 0;

  for (let r = 0; r < nums.length; r++) {
    sum += nums[r];

    if (r - l + 1 > k) {
      sum -= nums[l];
      l++;
    }

    if (r - l + 1 === k) {
      maxSum = Math.max(maxSum, sum);
    }
  }

  return maxSum / k;
};
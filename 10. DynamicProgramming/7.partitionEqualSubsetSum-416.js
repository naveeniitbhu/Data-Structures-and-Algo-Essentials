// nums = [5,1,5,11]
function partionequal(nums) {
  const total = nums.reduce((acc, num) => acc + num, 0)
  if (total % 2 !== 0) return false;

  function solve(currIndex, currSum) {
    if (currSum === total / 2) {
      return true
    }
    if (currSum > total / 2) {
      return false;
    }
    if (currIndex >= nums.length) {
      return false;
    }
    return solve(currIndex + 1, currSum + nums[currIndex]) || solve(currIndex + 1, currSum)
  }
  return solve(0, 0)
}

console.log(partionequal([5, 1, 5, 11]))
// T(C) - O(2^n)
// S(C) - O(n)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition_top_down = function (nums) {
  const total = nums.reduce((acc, num) => acc + num, 0)
  if (total % 2 !== 0) return false;

  const target = total / 2;

  const dp = new Map();

  function solve(currIndex, currSum) {
    if (currSum === total / 2) return true;
    if (currSum > total / 2) return false;
    if (currIndex >= nums.length) {
      return false;
    }
    const key = `${currIndex},${currSum}`;
    if (dp.has(key)) {
      return dp.get(key);
    }
    const result = solve(currIndex + 1, currSum + nums[currIndex]) || solve(currIndex + 1, currSum)
    dp.set(key, result)
    return result

  }

  return solve(0, 0)
};

// Dp solution
function partionequal_dp_solution(nums) {
  const total = nums.reduce((acc, num) => acc + num, 0)
  if (total % 2 !== 0) return false;

  const tgt = total / 2; // 0.....tgt indices
  const rows = nums.length; // 0....rows indices

  // dp[i][sum]
  // means: Can I reach the target starting from currIndex = i with current sum = sum ?

  const dp = Array.from({ length: rows + 1 }, () => new Array(tgt + 1).fill(false))

  for (let r = 0; r <= rows; r++) {
    dp[r][tgt] = true;
  }

  for (let r = rows - 1; r >= 0; r--) {
    for (let sum = tgt - 1; sum >= 0; sum--) { // c

      const skip = dp[r + 1][sum]

      let take = false;

      if (sum + nums[r] <= tgt) {
        take = dp[r + 1][sum + nums[r]] // increase sum move to next index
      }
      dp[r][sum] = take || skip;
    }
  }

  return dp[0][0]

}

console.log(partionequal([5, 1, 5, 11]))




/**
 * @param {list_int32} s
 * @return {list_bool}
 */
function equal_subset_sum_partition(s) {
  const n = s.length;

  const total = s.reduce((acc, num) => acc + num, 0);

  if (total % 2 !== 0) {
    return [];
  }

  const tgt = total / 2;
  const assignment = new Array(n);

  function solve(index, currSum, count1) {
    if (currSum === tgt && count1 > 0 && index < n) {
      for (let i = index; i < n; i++) {
        assignment[i] = false;
      }
      return true;
    }

    if (index === n) {
      return false;
    }

    assignment[index] = true;
    if (solve(index + 1, currSum + s[index], count1 + 1)) {
      return true;
    }

    assignment[index] = false;
    if (solve(index + 1, currSum, count1)) {
      return true;
    }

    return false;
  }

  if (solve(0, 0, 0)) {
    return assignment;
  }

  return [];
}

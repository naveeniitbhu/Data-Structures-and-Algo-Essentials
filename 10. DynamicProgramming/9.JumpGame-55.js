
// Greedy is best
function can_reach_last_house(maximum_jump_lengths) {
  const n = maximum_jump_lengths.length
  let furthest = 0;

  for (let index = 0; index < n; index++) {
    if (furthest < index) {
      return false;
    }
    const localFurthest = index + maximum_jump_lengths[index];
    furthest = Math.max(furthest, localFurthest);
  }
  return true;
}
// O(n)

function can_reach_last_house(maximum_jump_lengths) {
  const n = maximum_jump_lengths.length;
  const tgt = maximum_jump_lengths[n - 1]
  function solve(rem, index) {
    // handle 0 case;
    // handle max index case;
    if (index >= n - 1) return true;

    const maxJump = maximum_jump_lengths[index];

    for (let i = 1; i <= maxJump; i++) {
      if (solve(index + i)) {
        return true;
      }
    }
    return false;
  }
  return solve(n - 1)
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const n = nums.length - 1;
  const dp = new Map();

  function solve(index) {
    if (index === n) return true;
    if (dp.has(index)) return dp.get(index);

    const maxJum = Math.min(n, index + nums[index]);

    for (let i = index + 1; i <= maxJum; i++) {
      if (solve(i)) {
        dp.set(index, true)
        return true
      }
    }
    dp.set(index, false)
    return false;
  }
  return solve(0)
};


function can_reach_last_house(maximum_jump_lengths) {
  const n = maximum_jump_lengths.length;

  // dp represents can i reach n if i am starting at index
  const dp = new Array(n).fill(false);
  dp[n - 1] = true;

  for (let index = n - 2; index >= 0; index--) {
    const maxJump = maximum_jump_lengths[index];
    for (let jump = 1; jump <= maxJump; jump++) {
      if (index + jump < n && dp[index + jump]) {
        dp[index] = true;
        break;
      }
    }
  }
  return dp[0]

}


// | Approach       |      Time |    Space |
// | -------------- | --------: | -------: |
// | Pure Recursion | **O(2ⁿ)** | **O(n)** |
// | Bottom-Up DP   | **O(n²)** | **O(n)** |

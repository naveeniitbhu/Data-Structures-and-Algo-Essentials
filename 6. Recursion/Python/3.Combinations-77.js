function find_combinations(n, k) {
  const result = [];

  function solve(start, slate) {
    if (slate.length === k) {
      result.push([...slate]);
      return;
    }

    for (let num = start; num <= n; num++) {
      slate.push(num);

      solve(num + 1, slate);

      slate.pop();
    }
  }

  solve(1, []);

  return result;
}


var combine = function (n, k) {
  const nums = Array.from({ length: n }, (_, i) => i + 1)

  const result = []; // to return array of combinations arrays

  function solve(slate, i, nums, k, result) {

    if (n - i + slate.length < k) {
      return;
    }

    if (slate.length == k) {
      result.push([...slate])
      return;
    }

    slate.push(nums[i])
    solve(slate, i + 1, nums, k, result)
    slate.pop()

    solve(slate, i + 1, nums, k, result)
  }
  solve([], 0, nums, k, result)
  return result
};

// height = n
// N = 2^(n+1) -1
// L = 2^n
// I = 2^n
// T(c) = T(L) + T(I)
//      = (2^n)*O(k) + (2^n)*O(1) = O(k.2^n)
//  without pruning n . 2^n
// Space
// Aux = O(n)
// Output = O(nCk . k)


/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine_withou_nums = function (n, k) {
  const result = []; // to return array of combinations arrays

  function solve(slate, i, n, k, result) {

    if (n - i + slate.length < k) {
      return;
    }

    if (slate.length == k) {
      result.push([...slate])
      return;
    }

    if (i > n) return;

    slate.push(i + 1)
    solve(slate, i + 1, n, k, result)
    slate.pop()

    solve(slate, i + 1, n, k, result)
  }
  solve([], 0, n, k, result)
  return result
};

/**
 * @param {list_int64} arr
 * @param {int64} k
 * @return {bool}
 */
function check_if_sum_possible(arr, k) {
  function solve(currSum, index, picked) {
    if (currSum === k && picked) {
      return true;
    }
    if (index === arr.length) {
      return false;
    }

    return solve(currSum + arr[index], index + 1, true) || solve(currSum, index + 1, picked)

  }
  return solve(0, 0, false)
}

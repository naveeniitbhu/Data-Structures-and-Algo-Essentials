/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix[0].length;
  const n = matrix.length;
  const len = m * n;
  let l = 0;
  let r = len - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let row = Math.floor((mid / m))
    let col = mid % m;
    let val = matrix[row][col];

    if (val === target) {
      return true
    } else if (val < target) {
      l = mid + 1;
    } else { r = mid - 1; }
  }
  return false
};
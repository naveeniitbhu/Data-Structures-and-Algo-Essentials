/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const rows = matrix.length
  const cols = matrix[0].length
  let start = 0
  let end = rows * cols - 1
  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    const row = Math.floor(mid / cols)
    const col = mid % cols
    const val = matrix[row][col]
    if (val == target) {
      return true
    }
    if (val < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return false
};
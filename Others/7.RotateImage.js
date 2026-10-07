/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  transpose(matrix)
  reverse(matrix)
};

// swap rows and columns
var transpose = function (matrix) {
  const n = matrix.length
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
}

var reverse = function (matrix) {
  const n = matrix.length
  for (let i = 0; i < n; i++) {
    reverseEachRow(matrix[i])
  }
}

var reverseEachRow = function (arr) {
  for (let p = 0; p < Math.floor(arr.length / 2); p++) {
    [arr[p], arr[arr.length - p - 1]] = [arr[arr.length - p - 1], arr[p]]
  }
  return arr
}
// On2
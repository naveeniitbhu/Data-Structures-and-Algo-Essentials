/**
 * 
 * @param {number} n 
 * @param {number[][]} updates 
 */


function rangeAddition(n, updates) {
  const diffArray = new Array(n).fill(0);

  for (const [start, end, val] of updates) {
    diffArray[start] = val;
    if (end + 1 < n) {
      diffArray[end + 1] = -val
    }
  }
  console.log(diffArray)
  // 3. Compute the prefix sum in-place to get the final result
  for (let i = 1; i < n; i++) {
    diffArray[i] += diffArray[i - 1]
  }
  return diffArray
}

console.log(rangeAddition(5, [[1, 3, 2], [2, 4, 3], [0, 2, -2]]))
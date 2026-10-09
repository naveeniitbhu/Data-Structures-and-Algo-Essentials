/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters2 = function (s, shifts) {
  const n = s.length
  const diffArr = new Array(n).fill(0)
  for (const [start, end, direction] of shifts) {
    const val = direction === 1 ? 1 : -1;
    diffArr[start] += val
    if (end + 1 < n) {
      diffArr[end + 1] -= val
    }
  }
  let currShift = 0
  const strArr = s.split('')

  for (let i = 0; i < n; i++) {
    currShift += diffArr[i]
    let code = (strArr[i].charCodeAt(0) - 97 + currShift) % 26
    if (code < 0) code += 26;

    strArr[i] = String.fromCharCode(97 + code);

  }
  return strArr.join('');
};

/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLettersBetter = function (s, shifts) {
  const n = s.length
  const diffArr = new Array(n).fill(0)
  for (const [start, end, direction] of shifts) {
    const val = direction === 1 ? 1 : -1;
    diffArr[start] += val
    if (end + 1 < n) {
      diffArr[end + 1] -= val
    }
  }
  for (let i = 1; i < n; i++) {
    diffArr[i] += diffArr[i - 1]
  }
  const strArr = s.split('')

  for (let j = 0; j < n; j++) {
    let shift = diffArr[j] % 26;
    if (shift < 0) {
      shift += 26
    }
    strArr[j] = String.fromCharCode(((strArr[j].charCodeAt(0) - 97 + shift) % 26) + 97);

  }
  return strArr.join('');
};
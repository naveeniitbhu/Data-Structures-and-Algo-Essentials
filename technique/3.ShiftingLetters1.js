/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  const n = shifts.length;
  const strArr = s.split('')
  let totalShift = 0;

  for (let i = n - 1; i >= 0; i--) {
    totalShift = (totalShift + shifts[i]) % 26

    let code = (strArr[i].charCodeAt(0) - 97 + totalShift) % 26
    strArr[i] = String.fromCharCode(code + 97)
  }
  return strArr.join('')
};
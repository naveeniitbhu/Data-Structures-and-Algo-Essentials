/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false
  }
  const original = x;
  let reverse = 0;

  while (x > 0) {
    let rem = x % 10
    reverse = reverse * 10 + rem
    x = Math.floor(x / 10)
  }
  return original == reverse
};
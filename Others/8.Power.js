/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let power = Math.abs(n);
  let ans = 1;

  while (power > 0) {
    if (power % 2 === 1) {
      ans *= x;
    }

    x *= x;
    power = Math.floor(power / 2);
  }

  return n < 0 ? 1 / ans : ans;
};
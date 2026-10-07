var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const current = map[s[i]];
    const next = map[s[i + 1]];

    if (current < next) {
      result -= current;   // this works because roman int is guaranteed.
    } else {
      result += current;
    }
  }

  return result;
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt2 = function (s) {
  let resultInt = 0;
  const mappedValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  let prevChar = '';
  let reduce = 0
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    if (i > 0) {
      prevChar = s.charAt(i - 1)
    }
    resultInt += mappedValue[char];
    const isPrevI = (char == 'V' || char == 'X') && prevChar == 'I';
    const isPrevX = (char == 'L' || char == 'C') && prevChar == 'X';
    const isPrevC = (char == 'D' || char == 'M') && prevChar == 'C';
    if (isPrevI || isPrevX || isPrevC) {
      reduce += 2 * mappedValue[prevChar];
    }
  };
  return resultInt - reduce

}
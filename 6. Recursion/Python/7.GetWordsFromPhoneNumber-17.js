
/**
 * @param {str} phone_number
 * @return {list_str}
 */
function get_words_from_phone_number(phone_number) {
  const m = {
    ["2"]: 'abc',
    ["3"]: 'def',
    ["4"]: 'ghi',
    ["5"]: 'jkl',
    ["6"]: 'mno',
    ["7"]: 'pqrs',
    ["8"]: 'tuv',
    ["9"]: 'wxyz'
  }
  const result = [];
  // let strArr = [];
  // for (let i = 0; i < phone_number.length; i++) {
  //   if (phone_number[i] !== "1" && phone_number[i] !== "0") {
  //     strArr.push(m[phone_number[i]])
  //   }
  // }
  const strArr = [...phone_number]
    .filter(ch => ch !== "0" && ch !== "1")
    .map(ch => m[ch]);
  // strArr = ["abc", "def", ....]

  function solve(slate, index) {
    if (strArr.length === index) {
      result.push(slate.join(''))
      return;
    }
    const len = strArr[index].length;

    for (let i = 0; i < len; i++) {
      slate.push(strArr[index][i])
      solve(slate, index + 1)
      slate.pop();
    }
  }
  solve([], 0)
  return result;
}

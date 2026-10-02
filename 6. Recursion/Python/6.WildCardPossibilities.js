
/**
 * @param {str} s
 * @return {list_str}
 */
function find_all_possibilities(s) {
  const result = [];

  function solve(curr, index, orgStr, result) {
    if (curr.length == orgStr.length) {
      result.push(curr)
      return
    }
    const char = orgStr[index]

    if (char === "?") {
      solve(curr + '1', index + 1, orgStr, result)
      solve(curr + '0', index + 1, orgStr, result)
    } else {
      solve(curr + char, index + 1, orgStr, result)
    }
  }
  solve("", 0, s, result)

  return result;
}

/**
 * 
 * @param {string} s 
 * @returns {string[]}
 */


function find_all_possibilities_arr(s) {
  const result = [];

  function solve(curr, index, orgStr, result) {
    if (curr.length == orgStr.length) {
      result.push(curr.join(""))
      return
    }
    const char = orgStr[index]

    if (char === "?") {
      curr.push('1')
      solve(curr, index + 1, orgStr, result)
      curr.pop()

      curr.push('0')
      solve(curr + '0', index + 1, orgStr, result)
      curr.pop()

    } else {
      solve(curr + char, index + 1, orgStr, result)
    }
  }
  solve([], 0, s, result)

  return result;
}

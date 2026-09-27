/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const n = s.length;
  const freq = new Map()
  for (const ch of t) {
    freq.set(ch, (freq.get(ch) || 0) + 1)
  }
  let l = 0;
  const window = new Map()
  let matches = 0;

  let minLen = Infinity;
  let minStart = 0;

  for (let r = 0; r < n; r++) {
    const currCh = s[r]
    window.set(currCh, (window.get(currCh) || 0) + 1)

    if (freq.has(currCh) && freq.get(currCh) == window.get(currCh)) {
      matches++
    }

    while (matches === freq.size) {
      if (r - l + 1 < minLen) {
        minLen = r - l + 1;
        minStart = l;
      }
      const leftCh = s[l];
      if (
        freq.has(leftCh) &&
        window.get(leftCh) === freq.get(leftCh)
      ) {
        matches--;
      }
      window.set(leftCh, window.get(leftCh) - 1)
      if (window.get(leftCh) === 0) {
        window.delete(leftCh)
      }
      l++;
    }
  }
  return minLen === Infinity
    ? ""
    : s.slice(minStart, minStart + minLen);

};
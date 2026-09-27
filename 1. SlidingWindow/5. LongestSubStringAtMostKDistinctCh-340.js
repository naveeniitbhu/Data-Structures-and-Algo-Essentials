function LongestsubStringAtMostk(s, k) {
  const n = s.length;
  let l = 0;
  const freq = new Map()

  let maxLen = 0;
  let start = 0;

  for (let r = 0; r < n; r++) {
    const currCh = s[r]
    freq.set(currCh, (freq.get(currCh) || 0) + 1);
    if (freq.size > k) {
      freq.set(s[l], freq.get(s[l]) - 1)
      if (freq.get(s[l]) === 0) {
        freq.delete(s[l])
      }
      l++;
    }
    const currentLen = r - l + 1;
    if (currentLen > maxLen) {
      maxLen = currentLen;
      start = l;
    }
  }
  return s.slice(start, start + maxLen);
}
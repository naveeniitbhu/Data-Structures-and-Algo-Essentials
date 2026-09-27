/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    const freq = new Map()
    const n = s.length;
    let l = 0
    let maxFreq = 0
    let maxLen = 0
    for (let r = 0; r < n; r++) {
        const currCh = s[r];
        freq.set(currCh, (freq.get(currCh) || 0) + 1)
        maxFreq = Math.max(maxFreq, freq.get(currCh))

        if (r - l + 1 - maxFreq > k) {
            const left = s[l]
            freq.set(left, freq.get(left) - 1)
            if (freq.get(left) == 0) {
                freq.delete(left)
            }
            l++
        }
        maxLen = Math.max(maxLen, r - l + 1)
    }
    return maxLen
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false;
    const freq = new Map()
    for (const ch of s1) {
        freq.set(ch, (freq.get(ch) || 0) + 1)
    }
    let l = 0
    let matches = 0;
    const window = new Map()
    for (let r = 0; r < s2.length; r++) {
        const currCh = s2[r]
        if (!freq.has(currCh)) {
            matches = 0
            window.clear();
            l = r + 1
            continue;
        }
        window.set(currCh, (window.get(currCh) || 0) + 1)
        if (window.get(currCh) === freq.get(currCh)) {
            matches++;
        }
        if (r - l + 1 > s1.length) {
            const left = s2[l];
            if (
                freq.has(left) &&
                window.get(left) === freq.get(left)
            ) {
                matches--;
            }
            window.set(left, window.get(left) - 1)
            if (window.get(left) === 0) {
                window.delete(left)
            }
            l++
        }
        if (r - l + 1 === s1.length && matches === freq.size) {
            return true
        }
    }
    return false
};
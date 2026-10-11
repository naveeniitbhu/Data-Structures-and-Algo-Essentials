def check_inclusion(s1, s2):
    if len(s1) > len(s2):
        return False
    freq = {}

    for ch in s1:
        freq[ch] = freq.get(ch, 0) + 1
    l = 0
    matches = 0
    window = {}

    for r in range(len(s2)):
        curr_ch = s2[r]
        if curr_ch not in freq:
            matches = 0
            window.clear()
            l = r + 1
            continue
        window[curr_ch] = window.get(curr_ch, 0) + 1
        if window.get(curr_ch) == freq.get(curr_ch):
            matches += 1
        if r - l + 1 > len(s1):
            left = s2[l]
            if left in freq and window.get(left) == freq.get(left):
                matches -= 1
            window[left] -= 1
            if window.get(left) == 0:
                del window[left]
            l += 1
        if r - l + 1 == len(s1) and matches == len(freq):
            return True
    return False

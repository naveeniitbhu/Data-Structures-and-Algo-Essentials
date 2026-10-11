def min_window(s, t):
    n = len(s)
    freq = {}
    for ch in t:
        freq[ch] = freq.get(ch, 0) + 1

    l = 0
    window = {}
    matches = 0

    min_len = float("inf")
    min_start = 0

    for r in range(n):
        curr_ch = s[r]
        window[curr_ch] = window.get(curr_ch, 0) + 1
        if curr_ch in freq and freq.get(curr_ch) == window.get(curr_ch):
            matches += 1
        while matches == len(freq):
            if r - l + 1 < min_len:
                min_len = r - l + 1
                min_start = l

            left_ch = s[l]
            if left_ch in freq and freq.get(left_ch) == window.get(left_ch):
                matches -= 1
            window[left_ch] -= 1
            if window.get(left_ch) == 0:
                del window[left_ch]
            l += 1
    return "" if min_len == float("inf") else s[min_start : min_start + min_len]

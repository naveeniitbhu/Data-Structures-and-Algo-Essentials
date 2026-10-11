def char_replacement(s, k):
    freq = {}
    n = len(s)
    l = 0
    max_freq = 0
    max_len = 0

    for r in range(n):
        curr_ch = s[r]
        freq[curr_ch] = freq.get(curr_ch, 0) + 1
        max_freq = max(max_freq, freq.get(curr_ch, 0))

        if r - l + 1 - max_freq > k:
            left = s[l]
            freq[left] -= 1
            if freq.get(left) == 0:
                del freq[left]
            l += 1
        max_len = max(max_len, r - l + 1)
    return max_len

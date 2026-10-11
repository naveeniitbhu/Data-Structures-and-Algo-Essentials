def longest_sub_string_at_mostk(s, k):
    n = len(s)
    l = 0
    freq = {}

    max_len = 0
    start = 0

    for r in range(n):
        curr_ch = s[r]
        freq[curr_ch] = freq.get(curr_ch, 0) + 1

        if len(freq) > k:
            freq[s[l]] -= 1
            if freq.get(s[l]) == 0:
                del freq[s[l]]
            l += 1

        if r - l + 1 > max_len:
            max_len = r - l + 1
            start = l
    return s[start : start + max_len]

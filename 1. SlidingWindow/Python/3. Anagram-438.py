def anagrams(s, p):
    if len(p) > len(s):
        return []
    required = {}
    window = {}
    for char in p:
        required[char] = required.get(char, 0) + 1

    matches = 0
    i = 0
    result = []

    for j in range(len(s)):
        char = s[j]
        window[char] = window.get(char, 0) + 1
        if char in required and window[char] == required[char]:
            matches += 1
        if j - i + 1 > len(p):
            left = s[i]
            if left in required and window[left] == required[left]:
                matches -= 1
            window[left] -= 1

            if window.get(left) == 0:
                del window[left]
            i += 1
        if matches == len(required):
            result.append(i)

    return result

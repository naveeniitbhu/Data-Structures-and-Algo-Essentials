def min_platform(arr, dep):
    n = len(arr)
    arr.sort()
    dep.sort()
    p, q, platforms, max_platforms = 0, 0, 0, 0

    while p < n:
        if arr[p] <= dep[q]:
            platforms += 1
            max_platforms = max(platforms, max_platforms)
            p += 1
        else:
            platforms -= 1
            q += 1
    return max_platforms

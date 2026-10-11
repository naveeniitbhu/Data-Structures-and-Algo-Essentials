def longest_ones(nums, k):
    max_len = 0
    zeros = 0

    l = 0
    for r, num in enumerate(nums):
        if num == 0:
            zeros += 1

        if zeros > k:
            left = nums[l]
            if left == 0:
                zeros -= 1
            l += 1
        max_len = max(max_len, r - l + 1)
    return max_len

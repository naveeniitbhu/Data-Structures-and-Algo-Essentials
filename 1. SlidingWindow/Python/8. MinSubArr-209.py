def min_sub_arr_len(target, nums):
    min_len = float("inf")
    curr_len = 0
    l = 0
    sum = 0

    for r, num in enumerate(nums):
        sum += num
        curr_len += 1
        while sum >= target:
            min_len = min(min_len, curr_len)
            left = nums[l]
            sum -= left
            l += 1
            curr_len -= 1

    return 0 if min_len == float("inf") else min_len

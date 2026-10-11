def num_sub_arr(nums, k):
    def atmost(k):
        if k < 0:
            return 0
        result, l = 0, 0
        odd_count = 0
        for r, num in enumerate(nums):
            if num % 2 != 0:
                odd_count += 1
            while odd_count > k:
                if nums[l] % 2 != 0:
                    odd_count -= 1
                l += 1
            result += r - l + 1
        return result

    return atmost(k) - atmost(k - 1)

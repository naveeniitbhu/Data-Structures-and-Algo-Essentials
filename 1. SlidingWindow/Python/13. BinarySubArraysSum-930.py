def num_subarr_with_sum(nums, goal):
    def atmost(k):
        if k < 0:
            return 0
        l, one_count, result = 0, 0, 0
        for r, num in enumerate(nums):
            if num == 1:
                one_count += 1
            while one_count > k:
                if nums[l] == 1:
                    one_count -= 1
                l += 1
            result += r - l + 1
        return result

    return atmost(goal) - atmost(goal - 1)

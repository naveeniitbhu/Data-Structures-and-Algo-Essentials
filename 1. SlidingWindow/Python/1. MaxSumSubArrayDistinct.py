def maxSubArraySum(nums: list, k: int) -> int:
    l = 0
    r = 0
    sum = 0
    maxSum = 0
    freq = {}
    for r in range(len(nums)):
        sum += nums[r]
        freq[nums[r]] = freq.get(nums[r], 0) + 1
        if r - l + 1 > k:
            sum -= nums[l]
            freq[nums[l]] -= 1
            if freq[nums[l]] == 0:
                del freq[nums[l]]
            l += 1
        if r - l + 1 == k and len(freq) == k:
            maxSum = max(sum, maxSum)

    return maxSum

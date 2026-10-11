def findMaxAverage(nums, k):
    avg = float("-inf")
    maxAvg = float("inf")
    sum = 0
    l = 0
    for r in range(nums.length):
        sum += nums[r]
        if r - l + 1 > k:
            sum -= nums[l]
            l += 1
        if r - l + 1 == k:
            avg = sum / k
            maxAvg = max(avg, maxAvg)
    return maxAvg

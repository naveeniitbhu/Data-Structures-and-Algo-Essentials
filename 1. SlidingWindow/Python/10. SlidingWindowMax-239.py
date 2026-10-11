def max_sliding_widow(nums, k):
    result = []
    deque = []

    for j in range(len(nums)):
        while len(deque) and deque[0] <= j - k:
            deque.pop(0)
        while len(deque) and nums[deque[len(deque) - 1]] <= nums[j]:
            deque.pop()
        deque.append(j)

        if j >= k - 1:
            result.append(nums[deque[0]])
    return result


def max_sliding_widow_2(nums, k):
    result = []
    deque = []
    front = 0

    for j in range(len(nums)):
        while len(deque) - front and deque[0 + front] <= j - k:
            front += 1
        while len(deque) - front > 0 and nums[deque[len(deque) - 1]] <= nums[j]:
            deque.pop()
        deque.append(j)

        if j >= k - 1:
            result.append(nums[deque[0 + front]])
    return result

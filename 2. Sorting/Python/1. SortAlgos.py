def selection_sort(nums):
    for i in range(len(nums)):
        index = find_smallest(nums, i)
        nums[i], nums[index] = nums[index], nums[i]
    return nums


def find_smallest(nums, start_index):
    smallest = nums[start_index]
    j = start_index
    for i in range(start_index + 1, len(nums)):
        if nums[i] < smallest:
            smallest = nums[i]
            j = i
    return j


def bubble_sort(nums):
    for i in range(len(nums)):
        swapped = False
        for j in range(len(nums) - i - 1):
            if nums[j] > nums[j + 1]:
                nums[j], nums[j + 1] = nums[j + 1], nums[j]
                swapped = True
        if not swapped:
            break
    return nums


def insertion_sort(nums):
    #     [5,3,2,1,6]
    #     [3,5,2,1,6]
    #     [2,3,5,1,6]
    for i, curr_num in enumerate(nums):
        j = i - 1
        while j >= 0 and nums[j] > curr_num:
            nums[j + 1] = nums[j]
            j -= 1
        nums[j + 1] = curr_num
    return nums


def merge_sort(nums):
    if len(nums) <= 1:
        return nums
    n = len(nums)
    mid = len(nums) // 2
    left = merge_sort(nums[:mid])
    right = merge_sort(nums[mid:n])
    return merge(left, right)


def merge(left, right):
    result, i, j = [], 0, 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    while i < len(left):
        result.append(left[i])
        i += 1
    while j < len(right):
        result.append(right[j])
        j += 1
    return result


def quick_sort(nums):
    if len(nums) <= 1:
        return nums
    n = len(nums)
    pivot = nums[n - 1]
    left, right = [], []
    for i in range(n - 1):
        if nums[i] < pivot:
            left.append(nums[i])
        else:
            right.append(nums[i])
    return quick_sort(left) + [pivot] + quick_sort(right)


def quick_sort_inplace(nums, low, high):
    if low >= high:
        return nums
    pIndex = partition(nums, low, high)
    quick_sort_inplace(nums, low, pIndex - 1)
    quick_sort_inplace(nums, pIndex + 1, high)

    return nums


def partition(nums, low, high):
    pivot = nums[high]
    i = low
    for j in range(low, high):
        if nums[j] < pivot:
            nums[i], nums[j] = nums[j], nums[i]
            i += 1
    nums[i], nums[high] = nums[high], nums[i]
    return i


def counting_sort(nums):
    if len(nums) <= 1:
        return nums

    n = len(nums)
    max_num = nums[0]
    for num in nums:
        max_num = max(max_num, num)

    count = [0] * (max_num + 1)
    for num in nums:
        count[num] += 1
    for i in range(1, max_num + 1):
        count[i] += count[i - 1]
    result = [0] * n
    for i in range(n - 1, -1, -1):
        ind = count[nums[i]] - 1
        result[ind] = nums[i]
        count[nums[i]] -= 1
    return result

def sort_arr_by_parity(nums):
    p, q = 0, -1
    while p < len(nums):
        if nums[p] % 2 == 0:
            q += 1
            nums[p], nums[q] = nums[q], nums[p]
            p += 1
        else:
            p += 1
    return nums


def sort_arr_by_parity_2(nums):
    i = 0
    j = len(nums) - 1
    while i < j:
        if not is_even(nums[i]):
            if is_even(nums[j]):
                nums[i], nums[j] = nums[j], nums[i]
                i += 1
                j -= 1
            else:
                j -= 1
        else:
            i += 1
    return nums


def is_even(num):
    return num % 2 == 0

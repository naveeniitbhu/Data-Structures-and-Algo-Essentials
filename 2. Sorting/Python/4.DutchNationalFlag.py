def sort_colors(nums):
    b, r, w = 0, -1, -1
    #   0 -red
    #   1 - white
    #   2 -blue
    #   reqd pattern  0000...1111...222..

    while b < len(nums):
        if nums[b] == 2:
            b += 1
        elif nums[b] == 1:
            w += 1
            nums[b], nums[w] = nums[w], nums[b]
            b += 1
        elif nums[b] == 0:
            w += 1
            nums[b], nums[w] = nums[w], nums[b]
            r += 1
            nums[r], nums[w] = nums[w], nums[r]
            b += 1
    return nums

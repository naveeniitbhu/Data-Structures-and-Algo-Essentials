def reverseString(s: str) -> str:
    if len(s) == 0 or len(s) == 1:
        return s
    return s[len(s) - 1] + reverseString(s[0 : len(s) - 1])


def revStack(nums: list) -> list:
    if len(nums) <= 1:
        return nums
    revArr = revStack(nums[1 : len(nums)])
    revArr.append(nums[0])
    return revArr


def reverStack(nums: list) -> list:
    l = 0
    r = len(nums) - 1

    while l < r:
        [nums[l], nums[r]] = [nums[r], nums[l]]
        l += 1
        r -= 1
    return nums

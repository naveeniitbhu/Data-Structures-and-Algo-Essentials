def fact(num: int) -> int:
    if num <= 1:
        return 1
    return num * fact(num - 1)


# Time: O(n)
# Aux Space: O(n)


def fact_tail(num: int, prod: int) -> int:
    if num <= 1:
        return prod
    return fact_tail(num - 1, prod * num)


# Time: O(n)
# Aux Space: O(1) if Python do tail call which it doesnt


def fact_ite(num: int) -> int:
    ans = 1
    for i in range(2, num + 1):
        ans = ans * i
    return ans


# Time:  O(n)
# Space: O(1)

def find_intersection(arr1, arr2, arr3):
    p, q, r = 0, 0, 0
    result = []
    while p < len(arr1) and q < len(arr2) and r < len(arr3):
        elem1 = arr1[p]
        elem2 = arr2[q]
        elem3 = arr3[r]
        if elem1 == elem2 and elem2 == elem3:
            result.append(elem1)
            p += 1
            q += 1
            r += 1
        else:
            if elem1 <= elem2 and elem1 <= elem3:
                p += 1
            elif elem2 <= elem3 and elem2 <= elem1:
                q += 1
            elif elem3 <= elem2 and elem3 <= elem1:
                r += 1
    return 0 if len(result) == 0 else result

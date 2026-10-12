import heapq


#  interval = [[0,30], [5,10], [15,20]]
#  can a person attend all meetings ? if one meeting ends
# and next start in same time, he can attend.
#  Leetcode 252
def meeting_room_1(interval):
    interval.sort(key=lambda x: x[0])
    n = len(interval)
    for i in range(n - 1):
        if interval[i][1] > interval[i + 1][0]:
            return False
    return True


# // interval = [[0,30], [5,10], [15,20]]
# // how many rooms required? - Leetcode 253


def meeting_room_2(interval):
    interval.sort(key=lambda x: x[0])
    min_heap = []
    heapq.heapify(min_heap)
    # above line not reqd heapify() converts an existing list
    # into a heap. An empty list is already a valid heap.
    for start, end in interval:
        if len(min_heap) > 0 and start >= min_heap[0]:
            heapq.heappop(min_heap)
        heapq.heappush(min_heap, end)
    return len(min_heap)

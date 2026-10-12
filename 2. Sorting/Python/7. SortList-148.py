class ListNode:
    def __init__(self, val=0, next=None) -> None:
        self.val = val
        self.next = next


def sort_list(head):
    arr = []
    curr = head
    while curr:
        arr.append(curr.val)
        curr = curr.next
    arr.sort()

    p = head
    i = 0
    while p:
        p.val = arr[i]
        i += 1
        p = p.next
    return head


#  T = nlogn
#  S = O(n)


def sort_list_On(head):
    if not head or not head.next:
        return head

    slow = head
    fast = head.next
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

    right = slow.next
    slow.next = None
    left = sort_list_On(head)
    right = sort_list_On(right)

    return merge(left, right)


def merge(left, right):
    dummy = ListNode(0)
    current = dummy

    while left and right:
        if left.val < right.val:
            current.next = left
            left = left.next
        else:
            current.next = right
            right = right.next
        current = current.next
    if left:
        current.next = left
    elif right:
        current.next = right
    return dummy.next

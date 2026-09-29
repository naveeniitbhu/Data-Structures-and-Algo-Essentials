/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode();
    let curr = dummy;

    // Use the input variables directly to save memory/lines
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }

    // Attach the remaining non-null list in one line
    curr.next = list1 || list2;

    return dummy.next;
};

// Time is O(m+n)
// Space is O(1) since dummy and curr as pointers and no new list is created.
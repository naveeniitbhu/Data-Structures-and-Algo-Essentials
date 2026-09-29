// 237
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    // let prev = new ListNode();
    // while(node.val != null && node.next != null) {
    //     node.val = node.next.val;
    //     prev = node;
    //     node = node.next
    // }
    // prev.next = null;
    // delete(node)
    node.val = node.next.val;
    node.next = node.next.next;
};
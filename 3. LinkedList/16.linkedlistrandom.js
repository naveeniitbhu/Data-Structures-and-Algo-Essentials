/**
 * @param {ListNode} head
 */
var Solution = function (head) {
    this.arr = [];
    let p = head;
    while (p != null) {
        this.arr.push(p.val);
        p = p.next;
    }
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
    const index = Math.floor(Math.random() * this.arr.length);
    return this.arr[index];
};


var Solution2 = function (head) {
    this.head = head;
};

/**
 * @return {number}
 */
Solution2.prototype.getRandom = function () {
    let result = null;
    let curr = this.head;
    let i = 1;

    while (curr != null) {
        if (Math.random() < (1 / i)) {
            result = curr.val;
        }
        curr = curr.next;
        i++
    }
    return result
};

class Solution3 {
    constructor(head) {
        this.head = head;
    }
    /**
     * @return {number}
     */
    getRandom() {
        let result = null;
        let curr = this.head;
        let i = 1;

        while (curr != null) {
            if (Math.random() < (1 / i)) {
                result = curr.val;
            }
            curr = curr.next;
            i++;
        }
        return result;
    }
}


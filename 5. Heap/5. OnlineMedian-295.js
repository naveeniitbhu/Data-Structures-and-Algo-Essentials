function online_median(stream) {
    const str = [...stream];
    const result = []
    const medians = [];
    for (const num of str) {
        result.push(num)
        result.sort((a, b) => a - b)
        const med = calculateMedian(result)
        medians.push(med)
    }
    return medians;
}

function calculateMedian(nums) {
    if (nums.length % 2 == 0) {
        const mid1 = nums.length / 2
        const mid2 = (nums.length / 2) - 1
        return Math.floor((nums[mid1] + nums[mid2]) / 2)
    } else {
        const mid = Math.floor(nums.length / 2)
        return nums[mid]
    }
}

// Heap Solution
var MedianFinder = function () {
    this.left = new MaxHeapCustom();
    this.right = new MinHeapCustom()
}

MedianFinder.prototype.addNum = function (num) {
    if (this.left.size() === 0 || num <= this.left.peek()) {
        this.left.push(num)
    } else {
        this.right.push(num)
    }

    if (this.left.size() > this.right.size() + 1) {
        this.right.push(this.left.pop())
    } else if (this.left.size() < this.right.size()) {
        this.left.push(this.right.pop())
    }

}

MedianFinder.prototype.findMedian = function () {
    if (this.left.size() === this.right.size()) {
        return ((this.left.peek() + this.right.peek()) / 2)
    }
    return this.left.peek()
}

function online_median_heap(stream) {
    const left = new MaxHeapCustom();
    const right = new MinHeapCustom();

    const ans = []

    for (const num of stream) {
        if (left.peek() === 0 || num < left.peek()) {
            left.push(num)
        } else {
            right.push(num)
        }

        // rebalancing

        if (left.size() > right.size() + 1) {
            right.push(left.pop())
        } else if (right.size() > left.size()) {
            left.push(right.pop())
        }

        if (left.size() === right.size()) {
            ans.push(Math.floor((left.peek() + right.peek()) / 2))
        } else {
            ans.push(left.peek());
        }
    }
    return ans;
}


class MinHeapCustom {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();

        return root;
    }

    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);

            if (this.heap[parent] <= this.heap[index]) break;

            [this.heap[parent], this.heap[index]] =
                [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }

    heapifyDown() {
        let index = 0;

        while (true) {
            let smallest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if (
                left < this.heap.length &&
                this.heap[left] < this.heap[smallest]
            ) {
                smallest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right] < this.heap[smallest]
            ) {
                smallest = right;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] =
                [this.heap[smallest], this.heap[index]];

            index = smallest;
        }
    }
}

class MaxHeapCustom {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();

        return root;
    }

    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);

            if (this.heap[parent] >= this.heap[index]) break;

            [this.heap[parent], this.heap[index]] =
                [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }

    heapifyDown() {
        let index = 0;

        while (true) {
            let largest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if (
                left < this.heap.length &&
                this.heap[left] > this.heap[largest]
            ) {
                largest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right] > this.heap[largest]
            ) {
                largest = right;
            }

            if (largest === index) break;

            [this.heap[index], this.heap[largest]] =
                [this.heap[largest], this.heap[index]];

            index = largest;
        }
    }
}

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
    const n = this.heap.length;

    while (true) {
      let smallest = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;

      if (left < n && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if (right < n && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] =
        [this.heap[smallest], this.heap[index]];

      index = smallest;
    }
  }
}

var findKthLargest = function (nums, k) {
  const heap = new MinHeapCustom();

  for (const num of nums) {
    if (heap.size() < k) {
      heap.push(num)
    } else if (heap.peek() < num) {
      heap.pop()
      heap.push(num)
    }
  }
  return heap.peek()
};

var findKthLargest = function (nums, k) {
  const h = new MaxHeap(nums);
  while (k > 1) {
    h.pop()
    k--;
  }
  return h.peek()
};

// Approach 1                         Approach 2

// Max Heap of ALL n                  Min Heap of size k
//         ↓                                  ↓
// Remove k-1 largest                  Keep k largest
//         ↓                                  ↓
// O(n + k log n)                      O(n log k)
// Space O(n)                          Space O(k)
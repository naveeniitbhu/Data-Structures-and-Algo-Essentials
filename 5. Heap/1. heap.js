class MinHeap {
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

var KthLargest = function (k, nums) {
  this.k = k;
  this.minHeap = new MinHeap();

  for (const num of nums) {
    this.add(num);
  }
};

KthLargest.prototype.add = function (val) {
  if (this.minHeap.size() < this.k) {
    this.minHeap.push(val);
  } else if (val > this.minHeap.peek()) {
    this.minHeap.pop();
    this.minHeap.push(val);
  }

  return this.minHeap.peek();
};

var KthLargest_1 = function (k, nums) {
  this.k = k;
  this.minQ = new MinPriorityQueue();
  for (const x of nums) {
    this.add(x);
  }
};


KthLargest_1.prototype.add = function (val) {
  this.minQ.enqueue(val);
  if (this.minQ.size() > this.k) {
    this.minQ.dequeue();
  }
  return this.minQ.front();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
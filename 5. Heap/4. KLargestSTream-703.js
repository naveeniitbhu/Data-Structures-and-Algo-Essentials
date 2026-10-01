function kth_largest(k, initial_stream, append_stream) {
  const stream = [...initial_stream];
  const result = [];

  for (const num of append_stream) {
    stream.push(num)
    stream.sort((a, b) => b - a)

    result.push(stream[k - 1])
  }

  return result
}

// We keep only the k largest elements in a min heap of size k. The smallest element among those k elements is the kth largest overall, and it's always available at the root in O(1) time. Heap updates take O(log k).

function kth_largest(k, initial_stream, append_stream) {
  const heap = new MinHeap();

  for (const num of initial_stream) {
    if (heap.size() < k) {
      heap.push(num);
    } else if (num > heap.peek()) {
      heap.pop();
      heap.push(num);
    }
  }

  const result = [];

  for (const num of append_stream) {
    if (heap.size() < k) {
      heap.push(num);
    } else if (num > heap.peek()) {
      heap.pop();
      heap.push(num);
    }

    result.push(heap.peek());
  }

  return result;
}

var KthLargest1 = function(k, nums) {
    this.k = k;
    this.minHeap = new MinHeap();

    for (const num of nums) {
        this.add(num);
    }
};

KthLargest1.prototype.add = function(val) {
    if (this.minHeap.size() < this.k) {
        this.minHeap.push(val);
    } else if (val > this.minHeap.peek()) {
        this.minHeap.pop();
        this.minHeap.push(val);
    }

    return this.minHeap.peek();
};


/**
 * @param {list_int32} arr
 * @param {int32} k
 * @return {list_int32}
 */
function find_top_k_frequent_elements(arr, k) {
  const m = new Map()

  for (const num of arr) {
    m.set(num, (m.get(num) || 0) + 1)
  }

  return [...m.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([num]) => num);
}
// HashMap + Sort	O(n + m log m)	       O(m)

var topKFrequent_Min_Heap = function (nums, k) {
  const freq = new Map();
  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1
    );
  }

  const heap = new MinHeap((a, b) => a[0] - b[0]);
  for (const [num, count] of freq.entries()) {
    if (heap.size() < k) {
      heap.push([count, num])
    } else if (heap.peek()[0] < count) {
      heap.pop();
      heap.push([count, num])
    }
  }
  return heap.heap.map(
    ([count, num]) => num
  );
};


// Min Heap (size k)	O(n + m log k)	     O(m + k)
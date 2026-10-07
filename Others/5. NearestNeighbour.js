
/**
 * @param {int32} p_x
 * @param {int32} p_y
 * @param {int32} k
 * @param {list_list_int32} n_points
 * @return {list_list_int32}
 */
function nearest_neighbours(p_x, p_y, k, n_points) {
  const result = []
  for (let i = 0; i < n_points.length; i++) {
    const dist = calculateDistance(p_x, p_y, n_points[i]);
    result.push([dist, n_points[i]])
  }
  result.sort((a, b) => {
    return (a[0] - b[0])
  })
  return result
    .slice(0, k)
    .map(item => item[1]);
}

function calculateDistance(px, py, point) {
  const dist = Math.sqrt((point[0] - px) ** 2 + (point[1] - py) ** 2)
  return dist;
}



function nearestNeighUsingMaxHeap(p_x, p_y, k, n_points) {
  const heap = new MaxHeap()

  for (const point of n_points) {
    const dist = (point[0] - p_x) ** 2 + (point[1] - p_y) ** 2;
    if (heap.size() < k) {
      heap.push([dist, point])
    } else if (heap.peek()[0] > dist) {
      heap.pop();
      heap.push([dist, point])
    }
  }
  return heap.heap.map(item => item[1])

}
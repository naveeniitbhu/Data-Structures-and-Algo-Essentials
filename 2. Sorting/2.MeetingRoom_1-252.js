// interval = [[0,30], [5,10], [15,20]] 
// can a person attend all meetings ? if one meeting ends and next start in same time, he can attend.
// Leetcode 252
function meetingRoom_1(interval) {
  interval.sort((a, b) => a[0] - b[0])
  const n = interval.length;
  for (let i = 0; i < n - 1; i++) {
    // if (interval[i][0] > interval[i + 1][0]) {
    //   return false;
    // } not required as we have sorted which guarantees the next value will not be bigger
    if (interval[i][1] > interval[i + 1][0]) {
      return false;
    }
  }
  return true
}

// interval = [[0,30], [5,10], [15,20]]
// how many rooms required? - Leetcode 253
function meetingRoom_2(interval) {
  interval.sort((a, b) => a[0] - b[0])
  const minHeap = new MinHeap();

  for (const [start, end] of interval) {
    if (minHeap.size() > 0 && start >= minHeap.peek()) {
      minHeap.pop()
    }
    minHeap.push(end)
  }
  return minHeap.size()
}
// T = O(nlogn) S = O(n)
// Preferred solution


function meetingRoom_2(intervals) {

  const starts = [];
  const ends = [];

  // Separate start and end times
  for (const [start, end] of intervals) {
    starts.push(start);
    ends.push(end);
  }

  // Sort both arrays
  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);

  let p = 0;  // pointer for starts
  let q = 0;  // pointer for ends

  let rooms = 0;
  let maxRooms = 0;

  while (p < starts.length) {

    // A new meeting starts before the earliest
    // current meeting ends
    if (starts[p] < ends[q]) {
      rooms++;
      maxRooms = Math.max(maxRooms, rooms);
      p++;
    }

    // A meeting has ended, so we can reuse its room
    else {
      rooms--;
      q++;
    }
  }

  return maxRooms;
}

// Separate arrays: O(n)
// Sorting:         O(n log n)
// Two pointers:    O(n)

// Total time:      O(n log n)
// Space:           O(n)
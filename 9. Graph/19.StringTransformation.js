/**
 * @param {string[]} words
 * @param {string} start
 * @param {string} stop
 * @return {string[]}
 */
function string_transformation(words, start, stop) {
  // Helper function to check if two strings differ by exactly 1 character
  // Highly memory efficient (no string creation)
  function isOneEditDistance(s1, s2) {
    let diff = 0;
    const len = s1.length;
    for (let i = 0; i < len; i++) {
      if (s1[i] !== s2[i]) {
        diff++;
        if (diff > 1) return false;
      }
    }
    return diff === 1;
  }

  // Filter out duplicates and remove start/stop from dictionary to save memory
  const uniqueWords = Array.from(new Set(words)).filter(w => w !== start && w !== stop);

  // We add 'stop' manually to our graph processing layers
  const allWords = [start, ...uniqueWords, stop];
  const n = allWords.length;

  const startIndex = 0;
  const stopIndex = n - 1;

  // Special absolute edge case: start and stop are identical
  if (start === stop) {
    // Find if there's any valid intermediary step
    for (let i = 1; i < n - 1; i++) {
      if (isOneEditDistance(start, allWords[i])) {
        return [start, allWords[i], stop];
      }
    }
    return ["-1"];
  }

  // BFS tracking using strict index integers instead of 600-character long string keys
  const queue = [startIndex];
  let queueIndex = 0;

  const visited = new Uint8Array(n);
  visited[startIndex] = 1;

  const parent = new Int32Array(n).fill(-1);
  let found = false;

  while (queueIndex < queue.length) {
    const currIdx = queue[queueIndex++];
    const currWord = allWords[currIdx];

    // Check distance to all other unvisited words
    for (let i = 0; i < n; i++) {
      if (visited[i] === 0 && isOneEditDistance(currWord, allWords[i])) {
        visited[i] = 1;
        parent[i] = currIdx;
        queue.push(i);

        if (i === stopIndex) {
          found = true;
          break;
        }
      }
    }
    if (found) break;
  }

  if (found) {
    const path = [];
    let curr = stopIndex;
    while (curr !== -1) {
      path.push(allWords[curr]);
      curr = parent[curr];
    }
    return path.reverse();
  }

  return ["-1"];
}


// time Complexity
// Let N = number of words in the dictionary.
// Let L = length of each word.

// For each visited word, you generate 26 × L possible transformations, and each lookup in wordSet and visited is approximately O(1).

// Time: O(N × L × 26) ≈ O(NL)
// Space: O(N) for the queue, visited set, and parent map.

// leetcode 127
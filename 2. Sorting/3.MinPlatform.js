
function minPlatform(arr, dep) {
  let n = arr.length;
  arr.sort((a, b) => a - b)
  dep.sort((a, b) => a - b)

  let p = 0; // for arr
  let q = 0; // for dep

  let platforms = 0;
  let maxPlatforms = 0;

  while (p < n) {
    if (arr[p] <= dep[q]) {
      platforms++;
      maxPlatforms = Math.max(platforms, maxPlatforms);
      p++
    } else {
      platforms--;
      q++
    }
  }
  return maxPlatforms
}
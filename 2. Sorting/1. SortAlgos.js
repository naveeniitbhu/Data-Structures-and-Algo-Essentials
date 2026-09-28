function selectionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    const index = findSmallest(nums, i)
    [nums[i], nums[index]] = [nums[index], nums[i]]
  }
  return nums
}

function findSmallest(nums, startIndex) {
  let smallest = nums[startIndex];
  let j = startIndex
  for (let i = startIndex + 1; i < nums.length; i++) {
    if (nums[i] < smallest) {
      smallest = nums[i];
      j = i;
    }
  }
  return j
}

function bubbleSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      let swapped = false;
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return nums
}

function insertionSort(nums) {
  // [5,3,2,1,6]
  // [3,5,2,1,6]
  // [2,3,5,1,6]
  for (let i = 1; i < nums.length; i++) {
    const current = nums[i]
    let j = i - 1;
    while (j >= 0 && nums[j] > current) {
      nums[j + 1] = nums[j]
      j--;
    }
    nums[j + 1] = current
  }
  return nums
}

function mergeSort(nums) {
  // [5, 3, 2, 1, 6]
  const n = nums.length;
  const mid = Math.floor(n / 2)
  const left = mergeSort(nums.slice(0, mid))
  const right = mergeSort(nums.slice(mid))

  return merge(left, right)
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

// Quicksort
function quickSort(nums) {
  const n = nums.length;
  let pivot = arr[nums.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

function quickSortInPlace(nums, low, high) {
  if (low >= high) return;
  const n = nums.length;
  const pIndex = partition(nums, low, high)

  quickSortInPlace(nums, low, pIndex - 1)
  quickSortInPlace(nums, pIndex + 1, high)

  return nums
}

// all elems less than pivot on one side
function partition(nums, low, high) {
  let i = low;
  for (let j = low; j < high; j++) {
    if (nums[i] < pivot) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
      i++;
    }
  }
  [nums[i], nums[high]] = [nums[high], nums[i]]
  return i
}

function countingSort(nums) {
  if (nums.length <= 1) return nums;
  const n = nums.length;
  // let min = nums[0];
  let max = nums[0];
  for (const num of nums) {
    // min = Math.min(min, num)
    max = Math.max(max, num)
  }
  const count = new Array(max + 1).fill(0);
  for (const num of nums) {
    count[num]++;
  }
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1]
  }
  let result = new Array(n).fill(0)

  for (let i = n - 1; i >= 0; i--) {
    let ind = count[nums[i]] - 1;
    result[ind] = nums[i]
    count[nums[i]]--
  }
  return result
}

// T(c) = O(n+k) it is O(n) if k is small
// S(c) = O(k) 
// This is good where the range of values is small otherwise if we have array like [1,10000, 1], 
// then the count array will be big which is not good.
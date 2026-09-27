
var maxSlidingWindow = function (nums, k) {
    const result = [];
    const deque = [];

    for (let j = 0; j < nums.length; j++) {

        // Remove indices outside the current window
        while (deque.length && deque[0] <= j - k) {
            deque.shift();
        }

        // Remove smaller elements from the back
        while (
            deque.length &&
            nums[deque[deque.length - 1]] <= nums[j]
        ) {
            deque.pop();
        }

        deque.push(j);

        // Window has reached size k
        if (j >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};
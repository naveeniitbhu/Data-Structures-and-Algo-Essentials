/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
var combinationSum = function (candidates, target) {
    const n = candidates.length;
    const result = [];

    function solve(slate, currSum, start) {
        if (currSum > target) return;

        if (currSum === target) {
            result.push([...slate])
            return;
        }
        for (let i = start; i < n; i++) {
            slate.push(candidates[i])
            solve(slate, currSum + candidates[i], i)
            slate.pop();
        }
    }
    solve([], 0, 0)
    return result;
};
// smallest candidate - m
// T = n^(T/m)
// Space
//    stack - T/m
//   output - k.T/m


// for loop backtracking
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    const result = [];

    function solve(slate, index, currSum) {
        if (currSum === target) {
            result.push([...slate])
            return;
        }
        if (currSum > target) return;

        for (let i = index; i < candidates.length; i++) {
            if (i > index && candidates[i] === candidates[i - 1]) continue;

            slate.push(candidates[i])
            solve(slate, i + 1, currSum + candidates[i])
            slate.pop();
        }

    }
    solve([], 0, 0)
    return result;
}
// smallest candidate - m
// T = n^(T/m)
// Space
//    stack - T/m
//   output - k.T/m


// dfs solution - not preferred
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);

    const result = [];
    const slate = [];

    function dfs(index, sum) {

        if (sum === target) {
            result.push([...slate]);
            return;
        }

        if (index === candidates.length || sum > target)
            return;

        // -----------------
        // TAKE
        // -----------------
        slate.push(candidates[index]);
        dfs(index + 1, sum + candidates[index]);
        slate.pop();

        // -----------------
        // DON'T TAKE
        // Skip all duplicates
        // -----------------
        while (
            index + 1 < candidates.length &&
            candidates[index] === candidates[index + 1]
        ) {
            index++;
        }

        dfs(index + 1, sum);
    }

    dfs(0, 0);

    return result;
};
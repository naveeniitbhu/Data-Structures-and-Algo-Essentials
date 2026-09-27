# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A personal study collection of DSA problem solutions, mostly JavaScript, with a few Python files. It is not an application or a library. There is no build, lint, or test setup, and no test runner or CI config.

## Layout

Top-level folders are topics, numbered in study order: `1. SlidingWindow`, `2. Sorting`, `3. LinkedList`, `4. TwoPointer`, `5. Heap`, `6. Recursion`, `7. Trees`, `8. BinarySearch`, `9. Graph`, `10. DynamicProgramming`. `Others/` and `technique/` hold miscellaneous problems.

- `assets/` holds the README illustrations as SVG files: `banner.svg`, `learning-path.svg`, and one image per topic in `assets/topics/`. Each SVG carries its own `prefers-color-scheme: dark` styles, so keep that block when editing one.
- Folder names contain spaces and dots, so quote paths in shell commands.
- File names follow `<n>.<Name>-<leetcode#>.js`, e.g. `2. MaxSubArrAvg-643.js`. Files without a number are typically classic problems without a LeetCode ID.
- The `Python/` subfolders under `1. SlidingWindow` and `6. Recursion` hold Python ports. In `7. Trees` the `.py` files sit next to the `.js` files with the same prefix (`10.DFS.js` / `10.DFS.py`). `6. Recursion/Python/` also contains stray `.js` copies of the Recursion solutions.

## Conventions that matter when editing

- **Files are snippets, not runnable programs.** Most have no driver code and no imports. Some rely on definitions that aren't in the file, for example `MinHeap` (implemented in `5. Heap/1. heap.js` and used by other Heap files, Sorting, and Others), or `TreeNode` / `ListNode`, which the LinkedList files define themselves. Don't try to "fix" missing helpers by adding imports. Check whether the file is meant to be pasted into an online judge.
- **Several solutions per file is normal.** A file often holds a brute-force version followed by an optimized one, sometimes with the same function name declared twice (`var findMaxAverage = ...` twice in `1. SlidingWindow/2. MaxSubArrAvg-643.js`). Complexity notes are kept as inline comments. When adding an approach, append it rather than replacing the earlier ones, and keep the existing comment style.
- **Python files use LeetCode/Educative-style signatures** with a docstring describing the node class (`BinaryTreeNode` with `value`, `left`, `right`).
- **README index:** `README.md` has one table per topic listing every problem, its LeetCode ID, technique, and file link. When adding, renaming, or removing a solution file, update the matching table row.

## Running code

There is no test command. To run a single file, add a driver call at the bottom (or use a scratch file) and run it with Node or Python:

```sh
node "7. Trees/1. BFS.js"
python3 "7. Trees/10.DFS.py"
```

Only `8. BinarySearch/` has a `package.json` (`"type": "module"`, dependency `heap-js`), and only `8. BinarySearch/2.kth-smallest-pair.js` imports it, using ESM syntax. Run `npm install` inside that folder before running that file. Every other JS file is plain script code with no `import` or `require`.

## Git

`.gitignore` covers Node, Python, editor, and OS noise. `package-lock.json` in `8. BinarySearch/` is intentionally tracked.

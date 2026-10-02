function fact(num) {
  if (num <= 1) {
    return num
  }

  return num * fact(num - 1)
}
// Time: O(n)
// Space: O(n)

// A recursive function is tail recursive if the recursive call is the last operation performed.
function fact(num) {
  function factTail(num, prod) {
    if (num <= 1) {
      return prod;
    }

    return factTail(num - 1, prod * num);
  }

  return factTail(num, 1);
}
// Tail recursion
// Time: O(n)
// Stack: O(1)

function fact(n) {
  let ans = 1;

  for (let i = 2; i <= n; i++) {
    ans *= i;
  }

  return ans;
}

// Time: O(n)
// Space: O(1)

// memo is not required as no repeated calculations
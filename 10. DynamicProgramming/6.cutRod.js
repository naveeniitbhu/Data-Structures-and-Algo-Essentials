
// l =6, prices = [0,1,3,5,4,7,10]

function get_maximum_profit(price) {
  const n = price.length;
  let maxPrice = 0;

  function solve(remainingLength, totalPrice) {
    if (remainingLength < 0) return;

    if (remainingLength === 0) {
      maxPrice = Math.max(maxPrice, totalPrice)
      return
    }

    for (let piece = 1; piece <= remainingLength; piece++) {
      solve(remainingLength - i, price[piece - 1] + totalPrice)
    }

  }
  solve(n, 0)
  return maxPrice;
}


// Time: O(2^n) (exponential upper bound)
// Space: O(L)


// l = 6, prices = [0,1,3,5,4,7,10]

function cutRod(l, prices) {

  function solve(remainingLength) {

    if (remainingLength === 0) {
      return 0;
    }
    let maxPrice = 0;

    for (let cut = 1; cut <= remainingLength; cut++) {
      const profit = prices[cut] + solve(remainingLength - cut);
      maxPrice = Math.max(maxPrice, profit);
    }
    return maxPrice;
  }
  return solve(l);
}

console.log(cutRod(6, [0, 1, 3, 5, 4, 7, 10])); // 10


// l =6, prices = [0,1,3,5,4,7,10]
function get_maximum_profit(price) {
  const n = price.length;
  // dp represents that max cost of rod for length(index is length)
  const dp = new Array(n + 1).fill(0) // indices are 0-n
  dp[1] = price[0]

  for (let length = 1; length <= n; length++) {
    let maxPrice = 0
    for (let cut = 1; cut <= length; cut++) {
      maxPrice = Math.maxPrice(maxPrice, price[cut - 1] + dp[length - cut])
    }
    dp[length] = maxPrice
  }

  return dp[n]
}

// Time Complexity: O(L²)
// Space O(L)
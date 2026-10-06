/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange_bottom_up = function (coins, amount) {
  const memo = new Array(amount + 1).fill(Infinity);
  memo[0] = 0;

  for (let a = 1; a <= amount; a++) {
    for (const coin of coins) {
      if (a >= coin) {
        // choosing coin 5, org amt is 11 now it rem amount is 6
        // What's the minimum number of coins to make 6?
        memo[a] = Math.min(memo[a], memo[a - coin] + 1)
      }
    }
  }
  return memo[amount] === Infinity ? -1 : memo[amount];
};

// Time: O(amount × coins.length)
// Space: O(amount)


var coinChange = function (coins, amount) {
  if (amount === 0) return 0;

  const queue = [[0, 0]];   // sum, coinsUsed
  const visited = new Set([0]);

  while (queue.length) {
    const [sum, count] = queue.shift();

    for (const coin of coins) {
      const newSum = sum + coin;

      if (newSum === amount)
        return count + 1;

      if (newSum < amount && !visited.has(newSum)) {
        visited.add(newSum);
        queue.push([newSum, count + 1]);
      }
    }
  }

  return -1;
};

// Time: O(amount × coins.length)
// Space: O(amount)

var coinChange_with_list = function (coins, amount) {
  if (amount === 0) return 0;

  let visited = new Set();
  let queue = []

  for (const coin of coins) {
    queue.push([[coin], coin]) // coins and sum
    visited.add(coin)
  }

  while (queue.length) {
    const [currCoinsList, sum] = queue.shift();

    if (sum === amount) {
      return currCoinsList.length;
    }

    for (const coin of coins) {
      const newSum = sum + coin;

      if (newSum <= amount && !visited.has(newSum)) {
        visited.add(newSum);
        queue.push([[...currCoinsList, coin], newSum]);
      }
    }
  }
  return -1
};

// this is top down approach
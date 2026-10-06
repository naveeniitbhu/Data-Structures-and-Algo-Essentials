var change = function (amount, coins) {
  const memo = new Array(amount + 1).fill(0); // ways to make amoutnt
  memo[0] = 1;
  for (const coin of coins) {
    for (let a = coin; a <= amount; a++) {
      memo[a] += memo[a - coin]
    }
  }
  return memo[amount]
};


function number_of_ways(coins, amount) {
    let ways = 0;
    
    function solve(remainingAmount, index) {
        if(remainingAmount <0) return;
        if(remainingAmount === 0) {
            ways++;
            return;
        }
        for(let i=index; i<coins.length; i++) {
            const coin = coins[i]
            solve(remainingAmount-coin, i)
        }
        
    }
    solve(amount, 0)
    return ways;
}

function changeRecursive(amount, coins) {
  function countWays(index, currentAmount) {
    // Base Case 1: Target amount achieved
    if (currentAmount === 0) return 1;

    // Base Case 2: Exceeded target or no more coins available
    if (currentAmount < 0 || index >= coins.length) return 0;

    // Choice 1: Take current coin (keep same index to allow re-use)
    const take = countWays(index, currentAmount - coins[index]);

    // Choice 2: Skip current coin (move to next index)
    const skip = countWays(index + 1, currentAmount);

    return take + skip;
  }

  return countWays(0, amount);
}

// Example usage
console.log(changeRecursive(3, [1, 2, 3])); // Output: 3
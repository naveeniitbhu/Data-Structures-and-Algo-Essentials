const items = [
  { name: 'mac', weight: 3, price: 3 },
  { name: 'iphone', weight: 2, price: 3 },
  { name: 'jewe', weight: 4, price: 5 },
  { name: 'watch', weight: 1, price: 2 },
  { name: 'diary', weight: 2, price: 2 },
]

// return maxProfit
function knapsack(items, capacity) {
  let maxProfit = 0;

  function solve(i, runningWeight, runningProfit, items, capacity) {
    if (runningWeight > capacity) {
      return;
    }

    if (runningWeight == capacity) {
      maxProfit = Math.max(maxProfit, runningProfit)
      return
    }

    if (i === items.length) {
      maxProfit = Math.max(maxProfit, runningProfit)
      return
    }

    solve(i + 1, runningWeight + items[i].weight, runningProfit + items[i].price, items, capacity)

    solve(i + 1, runningWeight, runningProfit, items, capacity)
  }

  solve(0, 0, 0, items, capacity)
}

console.log(knapsack(items, 5)) // 5 is weight


// Now return the combinations with the maxProfit

function knapsack(items, capacity) {
  const result = [];
  let maxProfit = 0;

  function solve(i, slate, runningWeight, runningProfit, items, capacity) {
    if (runningWeight > capacity) {
      return;
    }

    if (runningWeight === capacity || i === items.length) {

      if (runningProfit > maxProfit) {
        maxProfit = runningProfit;

        // remove previous worse solutions
        result.length = 0;

        result.push([...slate]);
      }
      else if (runningProfit === maxProfit) {
        result.push([...slate]);
      }

      return;
    }

    slate.push(items[i])
    solve(i + 1, slate, runningWeight + items[i].weight,
      runningProfit + items[i].price, items, capacity, result)
    slate.pop()

    solve(i + 1, slate, runningWeight, runningProfit, items, capacity, result)
  }

  solve(0, [], 0, 0, items, capacity)

  return result;
}
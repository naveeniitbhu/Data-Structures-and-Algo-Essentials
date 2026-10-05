
/**
 * @param {list_str} zombies
 * @return {int32}
 */
function zombie_cluster(zombies) {
  if (!zombies || zombies.length === 0) {
    return 0;
  }

  let count = 0;

  const visited = new Array(zombies.length).fill(false);

  function dfs(z) {
    visited[z] = true;
    const currZombieStr = zombies[z]
    for (let j = 0; j < currZombieStr.length; j++) {
      if (currZombieStr[j] === "1" && !visited[j]) {
        dfs(j)
      }
    }
  }

  for (let i = 0; i < zombies.length; i++) {
    if (!visited[i]) {
      count++;
      dfs(i)
    }
  }
  return count;
}

// Space Complexity: O(N)

// You use:

// visited array: O(N)
// Recursion stack: up to O(N) in the worst case (if all zombies are connected in a ch
// Space Complexity: O(N)

// You use:

// visited array: O(N)
// Recursion stack: up to O(N) in the worst case (if all zombies are connected in a ch
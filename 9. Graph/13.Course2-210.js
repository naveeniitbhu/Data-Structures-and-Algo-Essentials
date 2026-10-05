/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const adj = Array.from({ length: numCourses }, () => []);
  for (const [course, prereq] of prerequisites) {
    adj[prereq].push(course)
  }
  const res = [];
  const arrival = new Array(numCourses).fill(false)
  const dep = new Array(numCourses).fill(false)

  function dfs(src) {
    arrival[src] = true;

    for (const neigh of adj[src]) {
      if (arrival[neigh] && !dep[neigh]) {
        return true // cycle exists
      }
      if (!arrival[neigh]) {
        if (dfs(neigh)) return true; // cycle exists
      }
    }
    dep[src] = true;
    res.push(src)
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!arrival[i]) {
      if (dfs(i)) return [];
    }
  }
  return res.reverse();
};
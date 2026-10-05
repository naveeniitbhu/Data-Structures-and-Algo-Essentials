/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {

  const adj = Array.from({ length: numCourses }, () => []);
  for (const [course, pre] of prerequisites) {
    adj[pre].push(course);
  }
  const arrival = new Array(numCourses).fill(false);
  const departure = new Array(numCourses).fill(false);

  function dfs(src) { // returns true if cycle exists
    arrival[src] = true;

    for (const neigh of adj[src]) {
      // Back edge found -> cycle
      if (arrival[neigh] && !departure[neigh]) {
        return true;
      }
      if (!arrival[neigh] && dfs(neigh)) {
        return true;
      }
    }
    departure[src] = true;
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!arrival[i]) {
      if (dfs(i)) { // if cycle exists, return false since courses cannot be finished
        return false;
      }
    }
  }

  return true;
};

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {

  const adj = Array.from({ length: numCourses }, () => []);
  for (const [course, pre] of prerequisites) {
    adj[pre].push(course);
  }
  // 0 = unvisited
  // 1 = visiting
  // 2 = visited
  const state = new Array(numCourses).fill(0);

  function dfs(node) {
    // Found a back edge -> cycle
    if (state[node] === 1) return true;
    // Already completely processed
    if (state[node] === 2) return false;
    state[node] = 1; // visiting
    for (const neigh of adj[node]) {
      if (dfs(neigh)) return true;
    }
    state[node] = 2; // visited
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (state[i] === 0) {
      if (dfs(i)) return false;
    }
  }

  return true;
};
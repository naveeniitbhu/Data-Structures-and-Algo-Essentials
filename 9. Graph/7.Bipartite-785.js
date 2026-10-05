
/**
 * @param {int32} num_of_people
 * @param {list_int32} dislike1
 * @param {list_int32} dislike2
 * @return {bool}
 */
function can_be_divided(num_of_people, dislike1, dislike2) {
  if (!dislike1 || !dislike2 || dislike1.length === 0 || dislike2.length === 0) return true;

  // create graph first
  const adj = Array.from({ length: num_of_people }, () => [])
  for (let i = 0; i < dislike1.length; i++) {
    adj[dislike1[i]].push(dislike2[i])
    adj[dislike2[i]].push(dislike1[i]);
  }

  const color = new Array(num_of_people).fill(-1) // 0 for set1 and 2 for set 2
  for (let i = 0; i < num_of_people; i++) {
    if (color[i] !== -1) continue;

    const queue = [i]
    color[i] = 0;

    while (queue.length) {
      const node = queue.shift();
      for (const neigh of adj[node]) {
        if (color[neigh] == -1) {
          color[neigh] = 1 - color[node]
          queue.push(neigh)
        } else if (color[neigh] === color[node]) {
          return false
        };
      }

    }
  }

  return true;
}

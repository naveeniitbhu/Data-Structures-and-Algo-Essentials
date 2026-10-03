function bfs(root) {
  if (!root) return;

  const queue = [root];

  while (queue.length) {
    const node = queue.shift();

    console.log(node.val);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }
}

function bfs_with_front_pointer(root) {
  if (!root) return;

  const queue = [root];
  let front = 0;

  while (front < queue.length) {
    const node = queue[front++];

    console.log(node.val);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }
}
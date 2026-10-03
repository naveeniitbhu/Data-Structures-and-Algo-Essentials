var levelOrder = function (root) {
  if (!root) return [];

  const queue = [root];
  const result = [];

  let currLevelNodes = [];
  let count = queue.length;

  while (queue.length > 0) {
    const node = queue.shift();

    count--;
    currLevelNodes.push(node.val);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);

    if (count === 0) {
      result.push(currLevelNodes);
      currLevelNodes = [];
      count = queue.length;
    }
  }

  return result;
};



var levelOrder2 = function (root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length) {
    const levelSize = queue.length;
    const level = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();

      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
};

var levelOrder2_with_fornt = function (root) {
  if (!root) return [];

  const result = [];
  const queue = [root];
  let front = 0;

  while (front < queue.length) {
    const levelSize = queue.length - front;
    const level = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue[front++];

      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
};



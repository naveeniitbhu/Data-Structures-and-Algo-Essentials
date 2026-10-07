var isValid = function (s) {
  if (s.length % 2 !== 0) return false;

  const stack = [];

  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (const ch of s) {
    if (pairs[ch]) {
      stack.push(pairs[ch]);
    } else if (stack.pop() !== ch) {
      return false;
    }
  }

  return stack.length === 0;
};
var findAnagrams = function (s, p) {
  if (p.length > s.length) return [];

  const required = new Map();
  const window = new Map();

  for (const char of p) {
    required.set(
      char,
      (required.get(char) || 0) + 1
    );
  }

  let matches = 0;
  let i = 0;
  const result = [];

  for (let j = 0; j < s.length; j++) {
    const char = s[j];

    window.set(
      char,
      (window.get(char) || 0) + 1
    );
    if (required.has(char) &&
      window.get(char) === required.get(char)) {
      matches++;
    }

    if (j - i + 1 > p.length) {
      const left = s[i];
      if (required.has(left) &&
        window.get(left) === required.get(left)) {
        matches--;
      }

      window.set(left, window.get(left) - 1);

      if (window.get(left) === 0) {
        window.delete(left);
      }

      i++;
    }
    if (matches === required.size) {
      result.push(i);
    }
  }

  return result;
};
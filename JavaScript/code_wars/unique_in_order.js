var uniqueInOrder = function (iterable) {
  let unique = [];

  if (iterable.length === 0) return unique;

  for (const val of iterable) {
    if (unique.length > 0 && unique[unique.length - 1] === val) continue;
    unique.push(val);
  }

  return unique;
};

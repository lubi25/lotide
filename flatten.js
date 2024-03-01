const flatten = function(array) {
  const flattened = [];

  for (const element of array) {
    if (Array.isArray(element)) {
      flattened.push(...flatten(element));
    } else {
      flattened.push(element);
    }
  }

  return flattened;
}

module.exports = flatten;
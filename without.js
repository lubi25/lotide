const without = function(source, itemsToRemove) {
  let remaining = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      remaining.push(source[i]);
    }
  }
  return console.log(remaining);
}

module.exports = without;
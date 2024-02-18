const middle = function(arr) {
  const length = arr.length;
  if (length <= 2) {
    return [];
  } else if (length % 2 === 1) {
    return [arr[Math.floor(length / 2)]];
  } else {
    const middleLeft = arr[length / 2 - 1];
    const middleRight = arr[length / 2];
    return [middleLeft, middleRight];
  }
}

module.exports = middle;
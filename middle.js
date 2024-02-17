const middle = function(arr) {
  const length = arr.length;
  if (length <= 2) {
    return console.log([]);
  } else if (length % 2 === 1) {
    return console.log([arr[Math.floor(length / 2)]]);
  } else {
    const middleLeft = arr[length / 2 - 1];
    const middleRight = arr[length / 2];
    return console.log([middleLeft, middleRight]);
  }
}

module.exports = middle;
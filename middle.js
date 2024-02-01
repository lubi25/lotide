const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const assertArraysEqual = function(array1, array2) {
  if (array1.length !== array2.length) {
    return console.log("false");
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return console.log("false");
    }
  }
  return console.log("true");
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

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

middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
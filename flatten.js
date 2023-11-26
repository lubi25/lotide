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

const flatten = function(arr) {
  return console.log(arr.flat().join(', '));
};

flatten([1, 2, [3, 4], 5, [6]])
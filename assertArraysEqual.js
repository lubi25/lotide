const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("true");
  } else {
    console.log("false");
  }
};

module.exports = assertArraysEqual;
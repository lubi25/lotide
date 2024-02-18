const assertArraysEqual = require('./assertArraysEqual');

const eqArrays = require('./eqArrays');

const flatten = function(arr) {
  return console.log(arr.flat().join(', '));
};

// flatten([1, 2, [3, 4], 5, [6]])

module.exports = flatten;
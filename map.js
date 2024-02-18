const assertEqual = require('./assertEqual');

const assertArraysEqual = require('./assertArraysEqual');

const eqArrays = require('./eqArrays');

// const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// const results1 = map(words, word => word[0]);
// console.log(results1);

// const results2 = map(words, word => word[2]);
// console.log(results2);

// const results3 = map(words, word => word.length);
// console.log(results3);

// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])

module.exports = map;
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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

function letterPositions(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
      const letter = sentence[i];
      if (letter !== ' ') {
          if (results[letter] === undefined) {
              results[letter] = [i];
          } else {
              results[letter].push(i);
          }
      }
  }
  
  return results;
}

const sentence = "lighthouse";
const positions = letterPositions(sentence);

const result = letterPositions("lighthouse in the house");
console.log(result);

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse").o, [6]);
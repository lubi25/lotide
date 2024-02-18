const assertArraysEqual = require('./assertArraysEqual');

const assertEqual = require('./assertEqual');

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

// const sentence = "lighthouse";
// const positions = letterPositions(sentence);

// const result = letterPositions("lighthouse in the house");
// console.log(result);

// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("lighthouse").o, [6]);


module.exports = letterPositions;
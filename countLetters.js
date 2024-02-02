const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

function countLetters(allLetters) {
  var letCount = {};

  for (const count of allLetters) {
    if (count !== ' ') {
      if (letCount.hasOwnProperty(count)) {
        letCount[count]++;
      } else {
        letCount[count] = 1;
      }
    }
  }

  return letCount;
}

const result = countLetters("lighthouse in the house");
console.log(result);
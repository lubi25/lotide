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

assertEqual(result['l'], 1);
assertEqual(result['i'], 2);
assertEqual(result['g'], 1);
assertEqual(result['h'], 4);
assertEqual(result['t'], 2);
assertEqual(result['o'], 2);
assertEqual(result['u'], 2);
assertEqual(result['s'], 2);
assertEqual(result['e'], 3);
assertEqual(result['n'], 1);
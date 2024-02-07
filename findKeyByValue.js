const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(show, genre) {
  for (const key in show) {
    if (show[key] === genre) {
      return key;
    }
  }
  return undefined;
}

console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
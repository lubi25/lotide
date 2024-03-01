const countLetters = function(allLetters) {
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
};

module.exports = countLetters;
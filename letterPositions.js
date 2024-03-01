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

module.exports = letterPositions;
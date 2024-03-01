const findKeyByValue = function(theKey, theValue) {
  for (const key in theKey) {
    if (theKey[key] === theValue) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
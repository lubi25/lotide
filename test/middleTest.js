// const middle = require('../middle');

// middle([1]) // => []
// middle([1, 2]) // => []
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]


const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns an empty array for an input array with length <= 2", () => {
    assert.deepEqual(middle([1]), []);
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns the middle element for an input array with odd length", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns the middle two elements for an input array with even length", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
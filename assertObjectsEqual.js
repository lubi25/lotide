const eqObjects = (object1, object2) => {
  const keys1 = Object.keys(object1).sort();
  const keys2 = Object.keys(object2).sort();

  if (keys1.length !== keys2.length) return false;

  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];
    const val1 = object1[key];
    const val2 = object2[key];

    if (typeof val1 !== typeof val2) return false;

    if (typeof val1 === 'object' && typeof val2 === 'object') {
      if (!eqObjects(val1, val2)) return false;
    } else {
      if (val1 !== val2) return false;
    }
  }

  return true;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };

// assertObjectsEqual(shirtObject, anotherShirtObject); 
// assertObjectsEqual(shirtObject, longSleeveShirtObject);

module.exports = assertObjectsEqual;
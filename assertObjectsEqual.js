const eqObjects = function(object1, object2) {
  const array1 = Object.keys(object1);
  const array2 = Object.keys(object2);
  if (array1.length !== array2.length) {
    return false;
  }
  for (const key of Object.keys(object1)) {
    const valOfObject1 = object1[key];
    const valOfObject2 = object2[key];

    if (Array.isArray(valOfObject1) || Array.isArray(valOfObject2)) {
      if (!eqArrays(valOfObject1, valOfObject2))
        return false;
    } else if (valOfObject1 !== valOfObject2) {
      return false;
    }
  }
  return true;
};


const assertObjectEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }
}

// test
// assertObjectEqual({ a: '1', b: 2 },{ b: 2, a: '1' })
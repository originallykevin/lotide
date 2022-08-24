const assertEqual = function(actual, expected) {
  if (actual === expected) {
    // console.log('✅✅✅ Assertion Passed: ' + actual + " === " + expected);
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    // console.log('🛑🛑🛑 Assertion Failed: ' + actual + " !== " + expected);
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  // GUARD CLAUSE ** if array1 and array2 are of different length, return false
  if (array1.length !== array2.length) {
    return false
  // else, continue rest of code
  } else {
  // compare if element of array1[i] === element of array2[i]
    for (let i = 0; i < array1.length; i++) {
      // console.log('array1[i]', array1[i])
      // console.log('array2[i]', array2[i])
      // looping through the elements and if one element does not equal, then it will return false and break out.
      if (array1[i] !== array2[i]) {
        return false;
      } 
    } return true
  }
}

eqArrays([1, 2, 3], [1, 2, 3]) // => true
// console.log('line 29', eqArrays([1, 2, 3], [1, 2, 3]))
eqArrays([1, 2, 3], [3, 2, 1]) // => false
// console.log('line 31', eqArrays([1, 2, 3], [3, 2, 1]))
eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// console.log('line 33', eqArrays(["1", "2", "3"], ["1", "2", "3"]))
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
// console.log('line 35', eqArrays(["1", "2", "3"], ["1", "2", 3]))

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    // console.log('✅✅✅ Assertion Passed: ' + actual + " === " + expected);
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    // console.log('🛑🛑🛑 Assertion Failed: ' + actual + " !== " + expected);
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// call this. Calls line 40 which calls line 11.
assertArraysEqual([1, 2, 3], [1, 2, 3])

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
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


const words = ["ground", "control", "to", "major", "tom"];
const colors = ['green', 'blue', 'red']


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const firstLetter = word => word[0]
const results2 = map(colors, firstLetter)

const results1 = map(words, firstLetter);
console.log(results1)

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])
assertArraysEqual(results2, ['g', 'b', 'r'])


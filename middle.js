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


// create function that passes an array
const middle = function(array) {
  // create variable = middleArray
  let middleArray = []
  // if odd return 1 element into middleArray
  if (array.length <= 2) {
    return []
  } else if (array.length % 2 !== 0) {
    middleArray.push(array[Math.floor(array.length - 1) / 2])
  } else if (array.length % 2 === 0) {
    middleArray.push(array[(array.length / 2) - 1])
    middleArray.push(array[(array.length / 2)])
  }
  return middleArray
}

middle([1]) // => []
// console.log('middle([1])', middle([1]))
assertArraysEqual(middle([1]), [])

middle([1, 2]) // => []
// console.log('middle([1, 2])', middle([1, 2]))
assertArraysEqual(middle([1, 2]), [])

middle([1, 2, 3]) // => [2]
// console.log('middle([1, 2, 3])', middle([1, 2, 3]))
assertArraysEqual(middle([1, 2, 3]), [2])

middle([1, 2, 3, 4, 5]) // => [3]
// console.log('middle([1, 2, 3, 4, 5])]', middle([1, 2, 3, 4, 5]))
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])

middle([1, 2, 3, 4]) // => [2, 3]
// console.log('middle([1, 2, 3, 4])', middle([1, 2, 3, 4]))
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])

middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
// console.log('middle([1, 2, 3, 4, 5, 6])', middle([1, 2, 3, 4, 5, 6]))
// if even return 2 elements into middleArray
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
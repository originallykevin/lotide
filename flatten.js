const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(array) {
  // create newArray
  let newArray = [];
  // loop through array 
  for (let i = 0; i < array.length; i++) {
    // check if the index is an Array
    if (Array.isArray(array[i])) {
      for (const element of array[i]) {
        newArray.push(element);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

module.exports = flatten;

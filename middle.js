const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')

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

module.exports = middle;
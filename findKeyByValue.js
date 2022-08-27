const assertEqual = function(actual, expected) {
  if (actual === expected) {
    // console.log('✅✅✅ Assertion Passed: ' + actual + " === " + expected);
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    // console.log('🛑🛑🛑 Assertion Failed: ' + actual + " !== " + expected);
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  // loop thru each property(key) inside the object (for in loop)
  const array = Object.keys(object)
  for (let key of array) {
    // console.log('array', array)
    // console.log('Object.keys(object)', Object.keys(object)) 
    // console.log('key', key)
    if (object[key] === value) {
    // console.log('object[key]', object[key])
      return key
    } 
  }
  // return first key which contains the given value Object.key(value)
  // if no key is found return undefined
}

// from review
// const findKeyByValue = function(object, value) {
//   const keys = Object.keys(object)
//   for (const key of keys) {
//     const element = object[key];
//     if (element === value) {
//       return key;
//     }
//   }
// }


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
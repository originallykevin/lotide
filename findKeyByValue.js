const assertEqual = require('./assertEqual');

const findKeyByValue = function(object, value) {
  // loop thru each property(key) inside the object (for in loop)
  const array = Object.keys(object);
  for (let key of array) {
    // console.log('array', array)
    // console.log('Object.keys(object)', Object.keys(object)) 
    // console.log('key', key)
    if (object[key] === value) {
      // console.log('object[key]', object[key])
      return key;
    }
  }
  // return first key which contains the given value Object.key(value)
  // if no key is found return undefined
};

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

module.exports = findKeyByValue;

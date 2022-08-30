const assertEqual = require('./assertEqual');

const eqObjects = function(object1, object2) {
  const array1 = Object.keys(object1);
  const array2 = Object.keys(object2);
  if (array1.length !== array2.length) {
    return false;
  }
  for (const key of Object.keys(object1)) {
    const valOfObject1 = object1[key];
    const valOfObject2 = object2[key];

    if (valOfObject1 !== valOfObject2) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
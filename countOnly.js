const assertEqual = require('./assertEqual');

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    //increment only our count in result only if found in itemsToCount object
    if (itemsToCount[item]) {
      // increment the count of each item into results as encounter each string item in the array
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
      // console.log(item)
    }
  }
  return results;
};

module.exports = countOnly;

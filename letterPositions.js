const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  let splitSentence = sentence.split('');
  // console.log('splitSentence', splitSentence)
  splitSentence.forEach((element, index) => {
    if (element !== ' ' && results[element]) {
      results[element].push(index);
    }
    if (element !== ' ' && !results[element]) {
      results[element] = [index];
    }
  });
  return results;
};

module.exports = letterPositions


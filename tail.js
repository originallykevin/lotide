const assertEqual = require('./assertEqual')

const tail = function(words) {
  const newArray = [];
  for (let i = 1; i < words.length; i++) {
    newArray.push(words[i]);
  }
  return newArray;
};

module.exports = tail

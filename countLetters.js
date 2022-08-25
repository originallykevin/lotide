const assertEqual = function(actual, expected) {
  if (actual === expected) {
    // console.log('✅✅✅ Assertion Passed: ' + actual + " === " + expected);
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    // console.log('🛑🛑🛑 Assertion Failed: ' + actual + " !== " + expected);
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// assertEqual('Lightouse', 'Bootcamp');
// assertEqual(1, 1);

const countLetters = function(string) {
  const results = {};
  for (const letter of string) {
    // only proceed with code below if letter != ' '
    if (letter !== ' ') {
      // console.log(letter)
      // check if letter property exist in the results object
      // if it exist, count increase by one
      if (results.hasOwnProperty(letter)) {
        results[letter] = results[letter] + 1
        // if it does not exist, 
        // add property into property, make value = 1
      } else {
        results[letter] = 1
      }
      // console.log(results)
    }
  }

  return results;
}




countLetters("lighthouse in the house")
console.log('countLetters("lighthouse in the house")', countLetters("lighthouse in the house"))

// Expected 
// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    // console.log('✅✅✅ Assertion Passed: ' + actual + " === " + expected);
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    // console.log('🛑🛑🛑 Assertion Failed: ' + actual + " !== " + expected);
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(words) {
  const newArray = [];
  for (let i = 1; i < words.length; i++) {
    newArray.push(words[i]);
  }
  return newArray;
};

// Test Case: Check the original array
//
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
console.log(tail(words));
assertEqual(words.length, 3); // original array should still have 3 elements!


const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result, ["Lighthouse", "Labs"]); //

// printing result to check
// console.log(newArray)


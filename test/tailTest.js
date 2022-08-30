// test/tailTest.js

const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it("returns length 3 for '['Yo Yo', 'Lighthouse', 'Labs']'", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const newArray = tail(words)
    assert.strictEqual(words.length, 3)

  });

  it("returns length 2 for tail(array) of '['Hello', 'Lighthouse', 'Labs']", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const newArray = tail(words)
    assert.strictEqual(newArray.length, 2)
  });

  it("returns 'Lighthouse' for tail(array) with index 0 of '['Hello', 'Lighthouse', 'Labs']", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const newArray = tail(words)
    assert.strictEqual(newArray[0], 'Lighthouse')
  });

  it("returns 'Labs' for index 1 of '['Hello', 'Lighthouse', 'Labs']", () => {
    const words = tail(['Hello', 'Lighthouse', 'Labs'])
    assert.strictEqual(words[1], 'Labs')
  })

  it("returns 'Lighthouse' for index 0 of '['Hello', 'Lighthouse', 'Labs']", () => {
    const words = tail(['Hello', 'Lighthouse', 'Labs'])
    assert.strictEqual(words[0], 'Lighthouse')
  })
});
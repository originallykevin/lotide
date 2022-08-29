// test/tailTest.js

const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it("returns length 3 for '['Yo Yo', 'Lighthouse', 'Labs']'", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(words.length, 3)
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
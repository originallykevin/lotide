const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe('#letterPositions', () => {
  it("return 1 from (\'hello\').e", () => {
    assert.deepEqual(letterPositions('hello').e, [1]);
  });

  it("return 4 from (\'hello\').o", () => {
    assert.deepEqual(letterPositions('hello').o, [4]);
  });
});

const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

describe('#eqObects', () => {
  it("return true for '(ab, ba)'", () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });

  it("return false for '(ab, abc)'", () => {
    assert.strictEqual(eqObjects(ab, abc), false);
  });
});

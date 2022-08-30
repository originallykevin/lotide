const countOnly = require('../countOnly');
const assert = require('chai').assert;


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {
  "Jason": true,
  "Karima": true,
  "Fang": true,
  "Agouhanna": false,
});

describe('#countOnly', () => {
  it("return 1 when passed '[\"Jason\"]'", () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it("return undefined when passed '[\"Karima\"]'", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });

  it("return 2 when passed '[\"Fang\"]'", () => {
    assert.strictEqual(result1["Fang"], 2);
  });

  it("return undefined when passed '[\"Agouhanna\"]'", () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });
});


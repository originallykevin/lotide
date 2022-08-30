const flatten = require('../flatten');
const assert = require('chai').assert;

describe('#flatten', () => {
  it('return [1, 2, 3, 4, 5, 6] from [1, 2, [3, 4], 5, [6]]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it('return [1, 2, 3, 4, 5, 6] from [1, 2, [3, 4], 5, 6]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, 6]), [1, 2, 3, 4, 5, 6]);
  });

});


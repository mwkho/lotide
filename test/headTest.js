const assert = require("chai").assert;
const head = require("../head");

describe('#head', () => {
  it('returns 1 for [1,2,3]', () => {
    assert.strictEqual(head([1,2,3]), 1);
  });

  it('empty array returns undefined', () =>{
    assert.strictEqual(head([]), undefined);
  });


  it('returns 1 for [1]', () =>{
    assert.strictEqual(head([1]), 1);
  });
});


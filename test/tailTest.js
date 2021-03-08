let tail = require('../tail');
let assert  = require('chai').assert;

describe('#tail', ()=>{
  it('return 0 when []', () => {
    assert.strictEqual(tail([]).length, 0);
  });
  
  it('return 0 when [1]', () => {

    assert.strictEqual(tail([1]).length, 0);

  });
  it('return 2 when [1,2,3]', () => {
    assert.strictEqual(tail([1,23,4]).length, 2);
  });

});
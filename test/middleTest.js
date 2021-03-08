let middle = require("../middle");
let assert = require("chai").assert;

describe('#middle', () =>{
  it('return [3,4] when [1,2,3,4,5,6] inputted', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]),[ 3, 4 ]);
  });

  it('return [3] when [1,2,3,4,5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]),[ 3 ]);

  });
  it('return [] when only have one element in array', () => {
    assert.deepEqual(middle([1]),[]);
  });
  it('return [] when array has only 2 elements', () => {
    assert.deepEqual(middle([1,2]),[]);
  });
  it('return [] when array is empty', () => {
    assert.deepEqual(middle([]),[]);
  });

});

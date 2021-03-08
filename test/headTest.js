const assertEqual = require("../assertEqual");
const head = require("../head");

describe('#head', () => {
  it('returns 1 for [1,2,3]', () => {
    assertEqual(head([1,2,3]), 1);
  });

  it('empty array returns undefined', () =>{
    assertEqual(head([]), undefined);
  });


  it('returns 1 for [1]', () =>{
    assertEqual(head([1]), 1);
  });

});


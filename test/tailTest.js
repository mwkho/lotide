let tail = require('../tail');
let assertEqual  = require('../assertEqual');

describe('#tail', ()=>{
  it('return 0 when []', () => {
    assertEqual(tail([]).length, 0);
  });
  
  it('return 0 when [1]', () => {

    assertEqual(tail([1]).length, 0);

  });
  it('return 2 when [1,2,3]', () => {
    assertEqual(tail([1,23,4]).length, 2);
  });

});
let tail = require('../tail');
let assertEqual  = require('../assertEqual');


let emptyArr = [];

assertEqual(tail([]).length, 0);

let arr1 = [1];
assertEqual(tail([1]).length, 0);


assertEqual(tail([1,23,4]).length, 2);
  

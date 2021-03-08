let tail = require('../tail');
let assertEqual  = require('../assertEqual');

assertEqual(tail([1]), []);
assertEqual(tail([]), []);
assertEqual(tail([1,23,4]), [23,4]);
  

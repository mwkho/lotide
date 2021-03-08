let eqArrays = require('../eqArrays');
let assertEqual = require('../assertEqual');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false


assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false); // => true
assertEqual(eqArrays([], []), true); // => true

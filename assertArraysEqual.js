let eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrayOne, arrayTwo) {
  let status = '!==';
  let equality = 'Failed';
  if (eqArrays(arrayOne, arrayTwo)) {
    status = '===';
    equality = 'Pass';
  }
  console.log(`Assertion ${equality}: [${arrayOne}] ${status} [${arrayTwo}]`);
};


module.exports = assertArraysEqual;
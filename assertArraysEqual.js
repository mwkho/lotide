const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) { //for unequal lengths array
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  let status = '!==';
  let equality = 'Failed';
  if (eqArrays(arrayOne, arrayTwo)) {
    status = '===';
    equality = 'Pass';
  }
  console.log(`Assertion ${equality}: [${arrayOne}] ${status} [${arrayTwo}]`);
};

// assertArraysEqual([true], [1]);
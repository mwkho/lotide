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

const middle = function(arr) {
  let middleArray = []; // initialize an empty array
  let middleMark;
  const length = arr.length;
  if (length > 2) { // checking for the minimum amount of elements in array
    middleMark = Math.floor(length / 2);
    if (length % 2 === 0) {
      middleArray = arr.slice(middleMark - 1, middleMark + 1);
    } else {
      middleArray = arr.slice(middleMark, middleMark + 1);
    }
  }
  return middleArray;
};


/*
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1,2]),[]);
assertArraysEqual(middle([]),[]);
*/




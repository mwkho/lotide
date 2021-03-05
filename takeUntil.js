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

const takeUntil = function(array1, callback) {
  let results = [];
  // set a switch value to turn off the push to the array
  let switchVal = true;
  // for each item in array, check the callback function
  for (let item of array1) {
  // if the callback is false and switch is on, push the result
    if (!callback(item) && switchVal) {
      results.push(item);
    } else { // o/w switch is off and stop adding to results
      switchVal = false;
    }
  }
  return results;
};

/**
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);



const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === '');
console.log(results2);
console.log('---');

const data3 = [];
const results3 = takeUntil(data3, x => x < 0);
console.log(results3)
**/
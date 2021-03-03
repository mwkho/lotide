const assertEqual = function(actual, expected) {
  let equality =  '!==';
  let status = 'Failed';
  if (actual === expected) {
    equality = '===';
    status = 'Passed';
  }
  console.log(`Assertion ${status}: ${actual} ${equality} ${expected}.`);
};

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

const without = function(source, removeItems) {
  let filtered = source.slice(0); // creating copy of source
  for (let unwanted of removeItems) { // loop through each removeItems and remove stuff
    filtered = removeItem(filtered, unwanted);
  }
  return filtered;
};

const removeItem = function(arr, unwanted) { // helper function to filter the unwanted from the list
  let pos = arr.indexOf(unwanted); //find the index of the unwanted and remove, then update to find it again
  while (pos !== -1) {
    arr.splice(pos,1);
    pos = arr.indexOf(unwanted);
  }
  return arr;
};

/*
assertArraysEqual(without([1,1,1,1,1], [1,2]), []);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["1", "2", "3"], ['1', '2', "3"]), []);
assertArraysEqual(without(["1", "2", "3"], []), ['1', '2', "3"]);
assertArraysEqual(without([], [1,2,'asd']), []);

test = [1,2,3,'1'];
without(test, [2]);
assertEqual(test.length, 4);
*/
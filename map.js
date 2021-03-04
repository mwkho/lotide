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

//
// map function starts here
//
const map = function(arr, callback){
  const results = []; 
  for (let item of arr){
    results.push(callback(item));
  }
    return results;
};


const falls = ['Helmecken falls', 'Norvan falls', 'Narin falls', 'Brandywine falls'];

let results = map(falls, fall => fall[0]);
assertArraysEqual(results, ['H', 'N', 'N', 'B']);

assertArraysEqual(map([1,2,2,4], num => num**2), [1,4,4,16]);
assertArraysEqual(map(falls, name => name[2].length),[1,1,1,1]);
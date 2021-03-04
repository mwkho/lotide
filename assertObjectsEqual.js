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

const eqObjects = function(object1, object2) {
  let equality = true;
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  let val1;
  let val2;
  if (key1.length !== key2.length) { // unmatching length
    return false;
  }
  for (let key of key1) {  //checking if keys match
    if (key2.includes(key) && equality) {
      val1 = object1[key];
      val2 = object2[key];
      if (Array.isArray(val1) && Array.isArray(val2)) {
        equality = eqArrays(val1,val2);
      } else {
        equality = val1 === val2;// checking if values match
      }
    } else {
      equality = false;
    }
  }
  return equality;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`Assertion FAILED!!: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

/*
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(ab,ab);
assertObjectsEqual(ab,ba);
assertObjectsEqual(ab,abc);
assertObjectsEqual(cd,dc);
assertObjectsEqual(ab,cd);
*/
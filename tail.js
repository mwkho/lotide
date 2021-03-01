const assertEqual = function(actual, expected) {
  let equality =  '!==';
  let status = 'Failed';
  if (actual === expected) {
    equality = '===';
    status = 'Passed';
  }
  console.log(`Assertion ${status}: ${actual} ${equality} ${expected}.`);
};

let tail = function(arr) {
  let cpy = arr.slice(); // making a copy of the array
  if ((cpy.length === 0) || (cpy.length === 1)) {
    return cpy;
  } else {
    cpy = cpy.slice(1);
  }
  return cpy;
};
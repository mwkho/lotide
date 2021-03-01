const assertEqual = function(actual, expected) {
  let equality =  '!==';
  let status = 'Failed';
  if (actual === expected) {
    equality = '===';
    status = 'Passed';
  }
  console.log(`Assertion ${status}: ${actual} ${equality} ${expected}.`);
};

const head = function(arr1) {
  return arr1[0];
};

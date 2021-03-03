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
  return arr.slice(1);
};

 const words = ["Yo Yo", "Lighthouse", "Labs"];
 tail(words); // no need to capture the return value since we are not checking it
 assertEqual(words.length, 3); // original array should still have 3 elements!
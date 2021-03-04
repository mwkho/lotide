const assertEqual = function(actual, expected) {
  let equality =  '!==';
  let status = 'Failed';
  if (actual === expected) {
    equality = '===';
    status = 'Passed';
  }
  console.log(`Assertion ${status}: ${actual} ${equality} ${expected}.`);
};

const findKeyByValue = function(myObject, val) {
  let key;
  for (let k of Object.keys(myObject)) {
    if (myObject[k] === val) {
      key = k;
      break;
    }
  }
  return key;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


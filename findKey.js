const assertEqual = function(actual, expected) {
  let equality =  '!==';
  let status = 'Failed';
  if (actual === expected) {
    equality = '===';
    status = 'Passed';
  }
  console.log(`Assertion ${status}: ${actual} ${equality} ${expected}.`);
};

const findKey = function(object1, callback){
  let found;
  let keys = Object.keys(object1);
  

  // assuming for each key, the value is another object,
  // can filter out the pertinent information
  for (let key of keys){
    if (callback(object1[key])){
      found = key;
      break;
    }
  }
  return found;
}

let test = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"


assertEqual(test, 'noma');

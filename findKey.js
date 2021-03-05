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
  // use a for indexed for loop with a modfiied break statment
  // if the key doesn't match callback, continue searching
  for (let key of keys){
    if (callback(key)){
      return key;
    }
  }
  return found;
}


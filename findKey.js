const findKey = function(object1, callback) {
  let found;
  let keys = Object.keys(object1);

  // assuming for each key, the value is another object,
  // can filter out the pertinent information
  for (let key of keys) {
    if (callback(object1[key])) {
      found = key;
      break;
    }
  }
  return found;
};

module.exports = findKey

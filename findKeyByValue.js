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


module.exports = findKeyByValue;
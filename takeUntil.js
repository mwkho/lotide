const takeUntil = function(array1, callback) {
  let results = [];
  let i = 0;
  // if the callback is true and the index is less then the array length
  // continue to add;
  while (!callback(array1[i]) && i < array1.length) {
    results.push(array1[i]);
    i++;
  }
  return results;
};


module.exports = takeUntil;

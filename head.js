const assertEqual = require("./assertEqual");

const head = function(arr1) {
  return arr1[0];
};

assertEqual(head([1,2,3]),1); 

module.exports = head;
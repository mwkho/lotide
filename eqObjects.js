let eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let equality = true;
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  let val1;
  let val2;
  if (key1.length !== key2.length) { // unmatching length
    return false;
  }
  for (let key of key1) {  //checking if keys match
    if (key2.includes(key) && equality) {
      val1 = object1[key];
      val2 = object2[key];
      if (Array.isArray(val1) && Array.isArray(val2)) {
        equality = eqArrays(val1,val2);
      } else {
        equality = val1 === val2;// checking if values match
      }
    } else {
      equality = false;
    }
  }
  return equality;
};
module.export = eqObjects;
/*
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
let test = eqObjects(ab, ba); // => true
assertEqual(test, true);
const abc = { a: "1", b: "2", c: "3" };
test = eqObjects(ab, abc); // => false
assertEqual(test, false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false);
*/
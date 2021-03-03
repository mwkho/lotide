const assertEqual = function(actual, expected) {
  let equality =  '!==';
  let status = 'Failed';
  if (actual === expected) {
    equality = '===';
    status = 'Passed';
  }
  console.log(`Assertion ${status}: ${actual} ${equality} ${expected}.`);
};

const countLetters = function(myStr) {
  let result = {};
  for (let character of myStr) {
    if (checkIsLetter(character)) { // filters out the nonletters
      result[character] = !result[character] ? 1 : result[character] + 1;
    }
  }
  return result;
};

const checkIsLetter = function(letter) {
  let abc = "abcdefghijklmnopqrstuvwxyz";
  abc += abc.toUpperCase();
  return (abc.indexOf(letter) !== -1);
};

/*
let myString = 'this is a Loo0ng string of various character!';
let result = countLetters(myString);

assertEqual(result['L'], 1);
assertEqual(result['!'], undefined);
assertEqual(result[' '], undefined);
assertEqual(result[''], undefined);
assertEqual(result['0'], undefined);
assertEqual(result['o'], 4);
*/
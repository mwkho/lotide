const assertEqual = function(actual, expected) {
  let equality =  '!==';
  let status = 'Failed';
  if (actual === expected) {
    equality = '===';
    status = 'Passed';
  }
  console.log(`Assertion ${status}: ${actual} ${equality} ${expected}.`);
};

const countLetters = function(myStr){
  let result = {};

  for (let character in myStr){
    if (checkIsLetter(character)){ // filters out the nonletters
      result[character] = result[character] ? 1 : result[character] + 1;
    }
  }
  return result;
}

const checkIsLetter = function(letter){
  let abc = "abcdefghijklmnopqrstuvwxyz";
  abc += abc.toUpperCase;
  return abc.findIndexOf(letter) !== -1;
}

let myString = 'this is a Loong string of various character!';
let result = countLetter(myString);

assertEqual(result['L'], 1);
assertEqual(result['!'], undefined);
assertEqual(result[' '], undefined);
assertEqual(result[''], undefined);
assertEqual(result['0'], 3);

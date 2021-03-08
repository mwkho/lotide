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

module.exports = countLetters;
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let character = sentence[i];
    if (checkIsLetter(character)) {
      if (results[character]) {
        results[character].push(i);
      } else {
        results[character] = [i];
      }
    }
  }
  return results;
};

const checkIsLetter = function(letter) {
  let abc = "abcdefghijklmnopqrstuvwxyz";
  abc += abc.toUpperCase();
  return (abc.indexOf(letter) !== -1);
};

module.exports = letterPositions;


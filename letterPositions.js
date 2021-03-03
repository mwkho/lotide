const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i ++){
    if (checkIsLetter(character)){
      results[character] = results[character] ? [] : 
    }
  }
  return results;

};

const checkIsLetter = function(letter) {
  let abc = "abcdefghijklmnopqrstuvwxyz";
  abc += abc.toUpperCase();
  return (abc.indexOf(letter) !== -1);
};
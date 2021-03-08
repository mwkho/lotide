const middle = function(arr) {
  let middleArray = []; // initialize an empty array
  let middleMark;
  const length = arr.length;
  if (length > 2) { // checking for the minimum amount of elements in array
    middleMark = Math.floor(length / 2);
    if (length % 2 === 0) {
      middleArray = arr.slice(middleMark - 1, middleMark + 1);
    } else {
      middleArray = arr.slice(middleMark, middleMark + 1);
    }
  }
  return middleArray;
};

module.exports = middle;



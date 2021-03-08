const without = function(source, removeItems) {
  let filtered = source.slice(0); // creating copy of source
  for (let unwanted of removeItems) { // loop through each removeItems and remove stuff
    filtered = removeItem(filtered, unwanted);
  }
  return filtered;
};

const removeItem = function(arr, unwanted) { // helper function to filter the unwanted from the list
  let pos = arr.indexOf(unwanted); //find the index of the unwanted and remove, then update to find it again
  while (pos !== -1) {
    arr.splice(pos,1);
    pos = arr.indexOf(unwanted);
  }
  return arr;
};

module.exports = without;

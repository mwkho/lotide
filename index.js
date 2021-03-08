const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const countLetters = require('./countLetters');
const findKeys = require('./findKeys');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');



module.exports = {
  head: head,
  tail: tail,
  middle: middle,

  countLetters: countLetters,
  countOnly: countOnly,
  findKeys: findKeys,
  findKeyByValue: findKeyByValue, 
  letterPositions : letterPositions, 
  map : map,
  takeUntil: takeUntil,
  without: without
};
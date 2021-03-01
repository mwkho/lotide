const assertEqual = function(actual, expected) {
  msg = '';
  if (actual === expected){
    msg = 'Assertion Passed: ' + actual + ' === ' + expected;
    } else{
    msg = 'Assertion Failed: ' + actual + ' !== ' + expected;
  }
  console.log(msg);
};

assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1,1);
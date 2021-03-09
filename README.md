# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nitram/lotide`

**Require it:**

`const _ = require('@nitram/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: Takes arr, an array, and returns the first element in the array otherwise, undefined if array is empty.

* `tail(arr)`: Takes arr, an array,  and returns a new array object that contains all the elements in array but the first element. If array has only  0 or 1 element, an empty array is returned.

* `middle(arr)`: Takes arr, an array, and returns a new array object containing the middle element of the array, if it has odd numbered elements. Otherwise, the middle two elements are returned in a new array object. An empty array is returned if the size of array is two or less.

* `countLetters(myStr)`:Given a string, myStr, countLetters returns an object whose keys are the alphabet characters (upper and lower case characters are different) in myStr and it's value is count of that character in myStr.

* `countOnly(allItems, itemsToCount))`: Given an array, allItems, and a single level object, itemsToCount, countOnly returns an object containing counts of everything in allItems that itemsToCount listed; truthy values in itemsToCount will be counted.

* `findKey(object1, callback))`:Given an object, object1, and a callback function, return the first key such that the callback returns a truthy value. If no key is found, then it should return undefined. 

* `findKeyByValue(myObject, val)`: Given an object, myObject, find key will return the first key which has the value, val. Undefined is returned if no key is found.

* `letterPositions(sentence)`: Returns an object whose keys are the alphabetical characters in the string, sentence and the values is an array of the positions of the characters.

* `map(arr, callback)`: Takes in an array arr, and a callback function callback and returns a new array with the elements evaluated in the callback function

* `takeUntil(array1, callback)`: Returns a 'slice' of the array array1, such that the slice ends upon the first truthy value is encountered when callback function is evaluated for that element.

* `without(source, removeItems)`:Return a subset of a given array source, removing unwanted elements defined in the array removeItems. 

* `eqObjects(object1, object2)`: Returns true if and only if the inputs object1 and object2 are equal deeply, keys and values.

* `eqArrays(arr1, arr2)`: Returns true if the two arrays arr1 and arr2 are equal.



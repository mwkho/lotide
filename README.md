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

* `head(array)`: Returns the first element in the array otherwise, 
returns undefined if array is empty.
* `tail(array)`: Returns an array object that contains all the elements in array but the first element.If array has only  0 or 1 element, an empty array is returned.
* `middle(array)`: Returns an array object containing the middle element of the array, if it has odd numbered elements. Otherwise, the middle two elements are returned in an array object. An empty array is returned if the size of array is two or less.
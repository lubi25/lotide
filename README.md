# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lubi25/lotide`

**Require it:**

`const _ = require('@lubi25/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Asserts whether two arrays are equal
* `assertEqual`: Asserts if values match and prints whether the assertion passes or fails
* `assertObjectsEqual`: Compares functions that return as objects
* `countLetters`: Counts how many times a letter appears in the a given string
* `countOnly`: Takes in a collection of items and return counts for a specific subset of those items
* `eqArrays`: Compares two arrays for a perfect match
* `eqObjects`: Compares two objects for a perfect match
* `findKey`: Scans an object and returns the first key for which the callback returns a truthy value
* `findKeyByValue`: Scans an object and returns the first key which contains the given value
* `flatten`: Returns a 'flattened' version of given arrays
* `head`: Retrieves the first element from an array
* `letterPositions`: Returns all the indices in a string where each character is found
* `middle`: Retrieves the middle element from an array
* `tail`: Retrieves the last element from an array
* `takeUntil`: Returns a slice of an array with elements taken from the beginning until the callback/predicate returns a truthy value
* `without`: Returns a new array with only those elements from `source` that are not present in the `itemsToRemove` array
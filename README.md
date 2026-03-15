# lodash-copy

A small educational Lodash clone in JavaScript, with core utility implementations and manual tests in Node.js.

## Goal
This project practices:
- array, string, and object manipulation
- callback/predicate usage
- writing pure and modular functions
- behavior verification through tests

## Implemented functions
The `_.js` file includes:
- `_.clamp(num, lower, upper)`
- `_.inRange(num, start, end)`
- `_.words(str)`
- `_.pad(string, length)`
- `_.has(object, key)`
- `_.invert(object)`
- `_.findKey(object, predicate)`
- `_.drop(array, num)`
- `_.dropWhile(array, predicate)`
- `_.chunk(array, size)`

## Project structure
- `_.js`: utility implementations
- `test/`: test suite for each function
- `test/test-all.js`: runner to execute all tests

## How to run tests
Prerequisite: Node.js installed.

Run all tests:

```bash
node test/test-all.js
```

Run a specific test (example):

```bash
node test/chunk.js
```

## Current status
All tests in `test/test-all.js` are currently passing.

## Project/exercise description
`lodash-copy` is a practical JavaScript exercise that reproduces, in a simplified way, some core Lodash utilities by implementing functions for handling numbers, strings, arrays, and objects (such as `clamp`, `inRange`, `pad`, `drop`, `chunk`, `findKey`, and `invert`) with a modular approach and validating behavior through a test suite runnable from the terminal with Node.js.

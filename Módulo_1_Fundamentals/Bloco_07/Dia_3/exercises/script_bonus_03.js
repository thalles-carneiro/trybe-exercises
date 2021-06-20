const assert = require('assert');

const removeMiddle = (words) => {
  let result;
  const { length } = words;
  let middleIndex;
  if (length % 2 === 0) {
    middleIndex = Math.floor(length / 2) - 1;
    result = words.splice(middleIndex, 2);
  } else {
    middleIndex = Math.floor(length / 2);
    result = words.splice(middleIndex, 1);
  }
  return result;
};

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const words2 = ['mouse', 'giraffe', 'queen', 'window', 'bottle', 'programming'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedWords2 = ['mouse', 'giraffe', 'bottle', 'programming'];
const expectedOutput = ['queen'];
const expectedOutput2 = ['queen', 'window'];
const output = removeMiddle(words);
const output2 = removeMiddle(words2);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(output2, expectedOutput2);
assert.deepStrictEqual(words, expectedWords);
assert.deepStrictEqual(words2, expectedWords2);
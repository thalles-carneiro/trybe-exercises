const assert = require('assert');
// escreva a função wordLengths aqui

const wordLengths = (words) => {
  const lengths = new Array;
  for (let index of words) {
    lengths.push(index.length);
  };
  return lengths;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
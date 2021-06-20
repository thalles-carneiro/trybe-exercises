const removeVowels = (word) => {
  const characters = word.split('');
  let counter = 1;
  let results;

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      characters[index] = counter;
      counter += 1;
    }
  }
  results = characters.join('');

  return results;
};

const parameter = 'Dayane';
const result = 'D1y2n3';

const assert = require('assert');

assert.strictEqual(typeof(removeVowels), 'function');

const output = removeVowels(parameter);
assert.strictEqual(output, result);
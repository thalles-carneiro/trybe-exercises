const assert = require('assert');
// escreva a função addOne aqui

const addOne = (arr) => {
  const newArr = new Array;
  for (let index in arr) {
    newArr[index] = arr[index] + 1;
  };
  return newArr;
};

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);
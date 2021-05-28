const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((result, array) => {
    array.forEach(item => result.push(item));
    return result;
  }, []);
};

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

//SOLUÇÃO DO GABARITO
// const assert = require('assert');

// const arrays = [
//   ['1', '2', '3'],
//   [true],
//   [4, 5, 6],
// ];

// function flatten() {
//   return arrays.reduce((acc, curr) => acc.concat(curr), []);
// }

// assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
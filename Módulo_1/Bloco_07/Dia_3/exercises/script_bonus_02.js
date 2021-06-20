const assert = require('assert');

const factorial = (num) => {
  let result = 1;
  if (num < 0) {
    throw new Error('Por favor, insira um número inteiro positivo.');
  };
  for (let index = num; index > 0; index -= 1) {
    result *= index;
  };
  return result;
};

const in1 = 5;
const exp1 = 120;

const in2 = 9;
const exp2 = 362880;

const in3 = 1;
const exp3 = 1;

const in4 = 0;
const exp4 = 1;

const in5 = 3;
const exp5 = 6;

const out1 = factorial(in1);
const out2 = factorial(in2);
const out3 = factorial(in3);
const out4 = factorial(in4);
const out5 = factorial(in5);

assert.strictEqual(out1, exp1);
assert.strictEqual(out2, exp2);
assert.strictEqual(out3, exp3);
assert.strictEqual(out4, exp4);
assert.strictEqual(out5, exp5);
assert.throws(() => { factorial(-3); }, new Error('Por favor, insira um número inteiro positivo.'));
const assert = require('assert');

const Verify = (password) => {
  // if (password.length < 8) {
  //   throw new Error('password should be larger than 8 chars');
  // };
  if (password === null) {
    throw new Error('password should not be null');
  };
  return true;
};

assert.strictEqual(typeof(Verify), 'function');
// assert.strictEqual(Verify('12345678'), true);
assert.strictEqual(Verify('', true));
const uppercase = require('../src/uppercase');

it('uppercase "xablau" to equal "XABLAU"', (done) => {
  uppercase('xablau', (str) => {
    expect(str).toBe('XABLAU');
    done();
  });
});
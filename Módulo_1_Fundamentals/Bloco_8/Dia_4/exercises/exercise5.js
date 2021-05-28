const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((counter, name) => {
    const aCounter = name.match(/a/gi).length;
    return counter + aCounter;
  }, 0);
;}

assert.deepStrictEqual(containsA(), 20);
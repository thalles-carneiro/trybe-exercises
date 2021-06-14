const { obj1, obj2, obj3 } = require('../src/compareObjects');
const { describe, expect, it } = require('@jest/globals');

// Testes da comparação de objetos - Exercício 5
describe('Compare dois objetos para verificar se são idênticos ou não', () => {
  it('Testa se obj1, obj2 e obj3 são objetos', () => {
    expect(typeof obj1).toBe('object');
    expect(typeof obj2).toBe('object');
    expect(typeof obj3).toBe('object');
  });

  it('Testa se dois objetos são idênticos', () => {
    expect(obj1).toEqual(obj2);
  });

  it('Testa se dois objetos são diferentes', () => {
    expect(obj1).not.toEqual(obj3);
    expect(obj2).not.toEqual(obj3);
  });
});
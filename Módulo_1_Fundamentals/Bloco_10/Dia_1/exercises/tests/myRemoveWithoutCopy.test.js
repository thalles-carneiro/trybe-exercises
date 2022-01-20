const myRemoveWithoutCopy = require('../src/myRemoveWithoutCopy');
const { describe, expect, it } = require('@jest/globals');

// Testes da função myRemove(arr, item) - Exercício 2
describe('A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array', () => {
  it('Testa se myRemoveWithoutCopy é uma função', () => {
    expect(typeof myRemoveWithoutCopy).toBe('function');
  });
  
  it('Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Faz uma chamada para a função myRemoveWithoutCopy e verifica se o array passado por parâmetro sofreu alterações', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(arr, 3)).toEqual(arr);
  });

  it('Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
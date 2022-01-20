const sum = require('../src/sum');
const { describe, expect, it } = require('@jest/globals');

// Testes da função sum(a, b) - Exercício 1
describe('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
  it('Testa se sum é uma função', () => {
    expect(typeof sum).toBe('function');
  });
  
  it('Testa se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Testa se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Testa se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });

  it('Testa se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => {
      sum(4, '5');
    }).toThrowError(new Error('parameters must be numbers'));
  });
});
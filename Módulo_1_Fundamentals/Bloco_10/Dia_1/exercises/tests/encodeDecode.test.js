const { encode, decode } = require('../src/encodeDecode');
const { describe, expect, it } = require('@jest/globals');

describe('Testa a função encode', () => {
  it('A função encode é definida', () => {
    expect(encode).toBeDefined();
  });
  it('Encode é uma função', () => {
    expect(typeof encode).toBe('function');
  });
  it('Converte apenas a vogal "a" no número 1', () => {
    expect(encode('paz')).toBe('p1z');
  });
  it('Converte apenas a vogal "e" no número 2', () => {
    expect(encode('teste')).toBe('t2st2');
  });
  it('Converte apenas a vogal "i" no número 3', () => {
    expect(encode('siri')).toBe('s3r3');
  });
  it('Converte apenas a vogal "o" no número 4', () => {
    expect(encode('olho')).toBe('4lh4');
  });
  it('Converte apenas a vogal "u" no número 5', () => {
    expect(encode('um')).toBe('5m');
  });
  it('Checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(encode('trybe').length).toBe(5);
  });  
});

describe('Testa a função decode', () => {
  it('A função decode é definida', () => {
    expect(decode).toBeDefined();
  });
  it('Decode é uma função', () => {
    expect(typeof decode).toBe('function');
  });
  it('Converte apenas o número 1 na vogal "a"', () => {
    expect(decode('p1z')).toBe('paz');
  });
  it('Converte apenas o número 2 na vogal "e"', () => {
    expect(decode('t2st2')).toBe('teste');
  });
  it('Converte apenas o número 3 na vogal "i"', () => {
    expect(decode('s3r3')).toBe('siri');
  });
  it('Converte apenas o número 4 na vogal "o"', () => {
    expect(decode('4lh4')).toBe('olho');
  });
  it('Converte apenas o número 5 na vogal "u"', () => {
    expect(decode('5m')).toBe('um');
  });
  it('Checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(decode('trybe').length).toBe(5);
  });  
});
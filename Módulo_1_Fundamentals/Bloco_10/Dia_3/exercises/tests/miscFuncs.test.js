const miscFuncs = require('../src/miscFuncs');

describe('Função que gera número aleatório entre 0 e 100', () => {
  miscFuncs.randomNumber = jest.fn().mockReturnValue(10);

  it('Testa a chamada da função, seu retorno e quantas vezes foi chamada', () => {
    expect(miscFuncs.randomNumber()).toBe(10);
    expect(miscFuncs.randomNumber).toHaveBeenCalled();
    expect(miscFuncs.randomNumber).toHaveBeenCalledTimes(1);
  });

  it('Testa a chamada da função, seu retorno, quantas vezes foi chamada e com quais parâmetros', () => {
    miscFuncs.randomNumber.mockReset();
    miscFuncs.randomNumber.mockImplementation((a, b) => a / b);

    expect(miscFuncs.randomNumber(10, 2)).toBe(5);
    expect(miscFuncs.randomNumber).toHaveBeenCalled();
    expect(miscFuncs.randomNumber).toHaveBeenCalledTimes(1);
    expect(miscFuncs.randomNumber).toHaveBeenCalledWith(10, 2);
  });
});
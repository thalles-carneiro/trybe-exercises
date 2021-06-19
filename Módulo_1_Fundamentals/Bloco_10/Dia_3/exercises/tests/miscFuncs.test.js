const miscFuncs = require('../src/miscFuncs');

describe('Função que gera número aleatório entre 0 e 100', () => {
  miscFuncs.randomNumber = jest.fn().mockReturnValue(10);

  it('Testa sua chamada, retorno e quantas vezes foi chamada', () => {
    expect(miscFuncs.randomNumber()).toBe(10);
    expect(miscFuncs.randomNumber).toHaveBeenCalled();
    expect(miscFuncs.randomNumber).toHaveBeenCalledTimes(1);
  });
});
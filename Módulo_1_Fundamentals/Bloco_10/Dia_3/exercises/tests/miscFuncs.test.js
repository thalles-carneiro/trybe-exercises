const miscFuncs = require('../src/miscFuncs');

describe('Mock de randomNumber para retornar o valor 10', () => {
  it('Mockando função que retorna por padrão o valor 10', () => {
    miscFuncs.randomNumber = jest.fn().mockReturnValue(10);
    
    expect(miscFuncs.randomNumber()).toBe(10);
    expect(miscFuncs.randomNumber).toHaveBeenCalled();
    expect(miscFuncs.randomNumber).toHaveBeenCalledTimes(1);
  });
});

describe('Muda a implementação de randomNumber para retornar a divisão entre parâmetros', () => {
  it('Mockando função que recebe dois parâmetros e retorna sua divisão', () => {
    miscFuncs.randomNumber = jest.fn().mockImplementation((a, b) => a / b);
  
    expect(miscFuncs.randomNumber(10, 2)).toBe(5);
    expect(miscFuncs.randomNumber).toHaveBeenCalled();
    expect(miscFuncs.randomNumber).toHaveBeenCalledTimes(1);
    expect(miscFuncs.randomNumber).toHaveBeenCalledWith(10, 2);
  });
});

describe('Testando duas implementações diferentes', () => {
  it('Mockando função que recebe três parâmetros e retorna sua multiplicação', () => {
    miscFuncs.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(miscFuncs.randomNumber(2, 5, 3)).toBe(30);
    expect(miscFuncs.randomNumber).toHaveBeenCalled();
    expect(miscFuncs.randomNumber).toHaveBeenCalledTimes(1);
    expect(miscFuncs.randomNumber).toHaveBeenCalledWith(2, 5, 3);
  });

  it('Mockando função que recebe um parâmetro e retorna seu dobro', () => {
    miscFuncs.randomNumber.mockReset();
    expect(miscFuncs.randomNumber).toHaveBeenCalledTimes(0);

    miscFuncs.randomNumber.mockImplementation((a) => a * 2);

    expect(miscFuncs.randomNumber(5)).toBe(10);
    expect(miscFuncs.randomNumber).toHaveBeenCalled();
    expect(miscFuncs.randomNumber).toHaveBeenCalledTimes(1);
    expect(miscFuncs.randomNumber).toHaveBeenCalledWith(5);
  });
});
const numberFunc = require('../src/randomNumber');

describe('Mock de randomNumber para retornar o valor 10', () => {
  it('Mockando função que retorna por padrão o valor 10', () => {
    numberFunc.randomNumber = jest.fn().mockReturnValue(10);
    
    expect(numberFunc.randomNumber()).toBe(10);
    expect(numberFunc.randomNumber).toHaveBeenCalled();
    expect(numberFunc.randomNumber).toHaveBeenCalledTimes(1);
  });
});

describe('Muda a implementação de randomNumber para retornar a divisão entre parâmetros', () => {
  it('Mockando função que recebe dois parâmetros e retorna sua divisão', () => {
    numberFunc.randomNumber = jest.fn().mockImplementation((a, b) => a / b);
  
    expect(numberFunc.randomNumber(10, 2)).toBe(5);
    expect(numberFunc.randomNumber).toHaveBeenCalled();
    expect(numberFunc.randomNumber).toHaveBeenCalledTimes(1);
    expect(numberFunc.randomNumber).toHaveBeenCalledWith(10, 2);
  });
});

describe('Testando duas implementações diferentes', () => {
  it('Mockando função que recebe três parâmetros e retorna sua multiplicação', () => {
    numberFunc.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(numberFunc.randomNumber(2, 5, 3)).toBe(30);
    expect(numberFunc.randomNumber).toHaveBeenCalled();
    expect(numberFunc.randomNumber).toHaveBeenCalledTimes(1);
    expect(numberFunc.randomNumber).toHaveBeenCalledWith(2, 5, 3);
  });

  it('Mockando função que recebe um parâmetro e retorna seu dobro', () => {
    numberFunc.randomNumber.mockReset();
    expect(numberFunc.randomNumber).toHaveBeenCalledTimes(0);

    numberFunc.randomNumber.mockImplementation((a) => a * 2);

    expect(numberFunc.randomNumber(5)).toBe(10);
    expect(numberFunc.randomNumber).toHaveBeenCalled();
    expect(numberFunc.randomNumber).toHaveBeenCalledTimes(1);
    expect(numberFunc.randomNumber).toHaveBeenCalledWith(5);
  });
});
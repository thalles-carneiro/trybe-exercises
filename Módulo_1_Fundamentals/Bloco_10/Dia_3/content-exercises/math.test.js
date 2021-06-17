const math = require("./math");

describe("Testando as funções do arquivo math.js", () => {
  it('Testa chamada da função subtrair', () => {
    math.subtrair = jest.fn();

    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
  });

  it('Testa a chamada da função multiplicar e o retorno padrão de valor "10"', () => {
    math.multiplicar = jest.fn()
      .mockReturnValue(10);

    math.multiplicar();
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar()).toBe(10);
  });
});
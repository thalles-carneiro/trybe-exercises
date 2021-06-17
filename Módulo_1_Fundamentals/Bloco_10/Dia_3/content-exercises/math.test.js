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

  it('Testa a função somar: sua chamada, retorno e parâmetros', () => {
    const mockSomar = jest.spyOn(math, 'somar');

    mockSomar(1, 2);
    expect(mockSomar).toHaveBeenCalled();
    expect(mockSomar).toHaveBeenCalledTimes(1);
    expect(mockSomar).toHaveBeenCalledWith(1, 2);
    expect(mockSomar(1, 2)).resolves.toBe(3);
  });
});
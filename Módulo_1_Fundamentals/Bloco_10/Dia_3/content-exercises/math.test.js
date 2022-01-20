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

  it('Testa a função dividir: sua chamada, retorno e parâmetros', () => {
    const mockDividir = jest.spyOn(math, 'dividir');
    mockDividir.mockReturnValue(15)
    mockDividir.mockReturnValueOnce(2)
    mockDividir.mockReturnValueOnce(5)

    expect(mockDividir(8, 4)).toBe(2);
    expect(mockDividir).toHaveBeenCalled();
    expect(mockDividir).toHaveBeenCalledTimes(1);
    expect(mockDividir).toHaveBeenCalledWith(8, 4);

    expect(mockDividir(50, 10)).toBe(5);
    expect(mockDividir).toHaveBeenCalled();
    expect(mockDividir).toHaveBeenCalledTimes(2);
    expect(mockDividir).toHaveBeenCalledWith(50, 10);

    expect(mockDividir(75, 5)).toBe(15);
    expect(mockDividir).toHaveBeenCalled();
    expect(mockDividir).toHaveBeenCalledTimes(3);
    expect(mockDividir).toHaveBeenCalledWith(75, 5);
  });

  it('Testa o mock da função subtrair de modo que possa restaurar sua implementação original', () => {
    const mockSubtrair = jest.spyOn(math, 'subtrair');
    mockSubtrair.mockClear();
    mockSubtrair.mockImplementation((a, b) => a * b);
    mockSubtrair.mockReturnValue(20);

    expect(mockSubtrair(4, 5)).toBe(20);
    expect(mockSubtrair).toHaveBeenCalled();
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
    expect(mockSubtrair).toHaveBeenCalledWith(4, 5);

    mockSubtrair.mockRestore();
    mockSubtrair.mockReturnValue(10);

    expect(mockSubtrair(20, 10)).toBe(10);
    expect(mockSubtrair).toHaveBeenCalled();
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
    expect(mockSubtrair).toHaveBeenCalledWith(20, 10);
  });
});
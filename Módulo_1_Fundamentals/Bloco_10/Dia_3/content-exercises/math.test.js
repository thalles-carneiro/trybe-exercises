const math = require("./math");

describe("Testando as funções do arquivo math.js", () => {
  it('Testa chamada da função subtrair', () => {
    math.subtrair = jest.fn();

    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
  });
});
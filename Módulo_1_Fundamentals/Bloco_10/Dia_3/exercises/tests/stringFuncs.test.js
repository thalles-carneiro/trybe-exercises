const strFuncs = require('../src/stringFuncs');

describe('Testando novas implementações', () => {
  it('Mocka função para receber um parâmetro e retornar em caixa baixa', () => {
    const upperCase = jest.spyOn(strFuncs, 'upperCase')
    upperCase.mockImplementation((string) => string.toLowerCase());

    expect(upperCase('XABLAU')).toBe('xablau');
    expect(upperCase).toHaveBeenCalled();
    expect(upperCase).toHaveBeenCalledTimes(1);
    expect(upperCase).toHaveBeenCalledWith('XABLAU');

    strFuncs.upperCase.mockRestore();

    expect(strFuncs.upperCase('xablau')).toBe('XABLAU');
  });

  it('Mocka função para receber um parâmetro e retornar a última letra', () => {
    strFuncs.firstCharacter = jest.fn().mockImplementation((string) => string.split('').reverse()[0]);
    // service.secondFunction.mockImplementation(a => a.charAt(a.length - 1)); (GABARITO)

    expect(strFuncs.firstCharacter('paturso')).toBe('o');
    expect(strFuncs.firstCharacter).toHaveBeenCalled();
    expect(strFuncs.firstCharacter).toHaveBeenCalledTimes(1);
    expect(strFuncs.firstCharacter).toHaveBeenCalledWith('paturso');
  });

  it('Mocka função para receber três parâmetros e os concatena', () => {
    strFuncs.stringConcat = jest.fn().mockImplementation((str1, str2, str3) => str1 + str2 + str3);
    // service.thirdFunction.mockImplementation((a, b, c) => a.concat(b, c)); (GABARITO)

    expect(strFuncs.stringConcat('pato', 'urso', 'xablau')).toBe('patoursoxablau');
    expect(strFuncs.stringConcat).toHaveBeenCalled();
    expect(strFuncs.stringConcat).toHaveBeenCalledTimes(1);
    expect(strFuncs.stringConcat).toHaveBeenCalledWith('pato', 'urso', 'xablau');
  });
});
let dogImgFetch = require('../src/dogImgFetch');

describe('Testando a requisição', () => {
  dogImgFetch = jest.fn();

  afterEach(() => {
    dogImgFetch.mockReset();
  });

  it('Testa o retorno da função caso a requisição seja resolvida', () => {
    dogImgFetch.mockResolvedValue('request sucess');
    expect.assertions(3);
    
    dogImgFetch();
    expect(dogImgFetch).toHaveBeenCalled();
    expect(dogImgFetch).toHaveBeenCalledTimes(1);
    return expect(dogImgFetch()).resolves.toBe('request sucess');
    // expect(dogImgFetch).toHaveBeenCalledTimes(2);
  });

  it('Testa o retorno da função caso a requisição seja rejeitada', () => {
    dogImgFetch.mockRejectedValue('request failed');
    expect.assertions(3);
    
    dogImgFetch();
    expect(dogImgFetch).toHaveBeenCalled();
    expect(dogImgFetch).toHaveBeenCalledTimes(1);
    return expect(dogImgFetch()).rejects.toMatch('request failed');
    // expect(dogImgFetch).toHaveBeenCalledTimes(2);
  });

});
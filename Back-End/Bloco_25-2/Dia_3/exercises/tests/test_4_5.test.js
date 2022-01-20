const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const escrevaArquivo = require('./escrevaArquivo');

describe('Executa a função escrevaArquivo', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync').returns('ok');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  describe('A resposta', () => {
    it('É uma "string"', () => {
      const resposta = escrevaArquivo('arquivo.txt', '#VQV NodeJS!');

      expect(resposta).to.be.a('string');
    });

    it('É igual a "ok"', () => {
      const resposta = escrevaArquivo('arquivo.txt', '#VQV NodeJS!');

      expect(resposta).to.be.equal('ok');
    });
  });
});

const { expect } = require('chai');

const numNaturalFn = require('./numerosNaturais');

describe('Executa a função numNaturalFn', () => {
  describe('Quando o número for maior que 0', () => {
    describe('A resposta', () => {
      it('É uma "string"', () => {
        const resposta = numNaturalFn(5);
  
        expect(resposta).to.be.a('string');
      });

      it('É igual a "positivo"', () => {
        const resposta = numNaturalFn(5);
  
        expect(resposta).to.be.equal('positivo');
      });
    });
  });

  describe('Quando o número for menor que 0', () => {
    describe('A resposta', () => {
      it('É uma "string"', () => {
        const resposta = numNaturalFn(-5);

        expect(resposta).to.be.a('string');
      });

      it('É igual a "negativo"', () => {
        const resposta = numNaturalFn(-5);

        expect(resposta).to.be.equal('negativo');
      });
    });
  });

  describe('Quando o número for igual a 0', () => {
    describe('A resposta', () => {
      it('É uma "string"', () => {
        const resposta = numNaturalFn(0);

        expect(resposta).to.be.a('string');
      });

      it('É igual a "neutro"', () => {
        const resposta = numNaturalFn(0);

        expect(resposta).to.be.equal('neutro');
      });
    });
  });

  describe('Quando o parâmetro passado não é um número', () => {
    describe('A resposta', () => {
      it('É uma "string"', () => {
        const resposta = numNaturalFn('xablau');

        expect(resposta).to.be.a('string');
      });

      it('É igual a "O parâmetro deve ser um número"', () => {
        const resposta = numNaturalFn('xablau');

        expect(resposta).to.be.equal('O parâmetro deve ser um número');
      });
    });
  });
});

const readline = require('readline-sync');

const scripts = [
  'Calcular IMC - \'./imc.js\'',
  'Calcular velocidade média - \'./velocidade.js\'',
  'Jogo de adivinhação - \'./sorteio.js\''
];

const scriptsIndex = readline.keyInSelect(scripts, 'Qual script deve ser executado?');

switch (scriptsIndex) {
  case 0: {
    require('./imc');
    break;
  }
  case 1: {
    require('./velocidade');
    break;
  }
  case 2: {
    require('./sorteio');
    break;
  }
  default: {
    console.log('Nenhum script foi executado');
  }
}

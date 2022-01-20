const readline = require('readline-sync');

const logResultado = (numeroSorteado, numeroEscolhido) => {
  if (numeroSorteado !== numeroEscolhido){
    return console.log(`Opa, não foi dessa vez. O número era ${numeroEscolhido}`);
  }

  return console.log('Parabéns, número correto!');
};

const iniciaJogo = () => {
  const numeroSorteado = Math.ceil(Math.random() * 10);

  const numeroEscolhido = readline.questionInt('Digite um número entre 0 e 10 para saber se é o número que estou pensando: ');

  logResultado(numeroSorteado, numeroEscolhido);

  const novamente = readline.keyInYN('Deseja jogar novamente?');

  if(!novamente) return console.log('OK, até a próxima! 0/');
  
  iniciaJogo();
};

iniciaJogo();

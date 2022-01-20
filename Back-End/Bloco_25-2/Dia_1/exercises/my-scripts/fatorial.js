const readline = require('readline-sync');

const fatorial = (n) => ([0, 1].includes(n) ? 1 : n * fatorial(n - 1));

const calculaFatorial = () => {
  const n = readline.questionInt('Informe o valor de "n": ');

  if(n <= 0) return console.log('Digite um número maior que 0!');

  console.log(`n = ${n}`);

  const resultado = fatorial(n);
  
  console.log(`Resultado: ${n}! = ${resultado}`);
};

calculaFatorial();

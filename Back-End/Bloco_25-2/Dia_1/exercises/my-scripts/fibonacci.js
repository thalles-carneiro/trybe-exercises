const readline = require('readline-sync');

const fibonacci = (n) => {
  if(n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const calculaFibonacci = () => {
  const n = readline.questionInt('Digite o valor de "n": ');

  if(n <= 0) return console.log('Insira um número inteiro maior que zero');

  for(let index = 1; index <= n; index += 1) {
    console.log(fibonacci(index));
  };
};

calculaFibonacci();

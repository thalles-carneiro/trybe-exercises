//Parte II - Funções

//Exercício 6
console.log ('Exercício 6');
console.log ();

function sumUpToNumber(number) {
  let sum = 0;
  for (let index = 1; index <= number; index+= 1) {
    sum += index;
  };
  return sum;
};

console.log(`Somatório = ${sumUpToNumber(5)}`);

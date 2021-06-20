//Parte II - Funções

//Exercício 2
console.log ('Exercício 2');
console.log ();

function indexHighestValue(numbers) {
  let higherNumber = 0;
  let higherNumberIndex = 0;
  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > higherNumber) {
      higherNumber = numbers[index];
      higherNumberIndex = index;
    };
  };
  return higherNumberIndex;
};

console.log(`O índice do maior valor é ${indexHighestValue([2, 3, 6, 7, 10, 1])}.`);

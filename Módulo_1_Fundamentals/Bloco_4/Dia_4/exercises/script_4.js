//Parte II - Funções

//Exercício 3
console.log ('Exercício 3');
console.log ();

function lowestValueIndex(numbers) {
  let lowerIndex = 0;
  for (let index in numbers) {
    if (numbers[index] < numbers[lowerIndex]) {
      lowerIndex = index;
    };
  };
  return lowerIndex;
};

console.log (`O índice do menor valor é ${lowestValueIndex([2, 4, 6, 7, 10, 0, -3])}.`);

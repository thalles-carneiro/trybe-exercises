//Exercício 7

//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

//Realiza o exercício utilizando apenas for
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < smallestNumber) {
    smallestNumber = numbers[index];
  };
};

console.log (smallestNumber);

//Realiza o exercício utilizando for/of
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
smallestNumber = numbers[0];

for (let number of numbers) {
  if (number < smallestNumber) {
    smallestNumber = number;
  };
};

console.log (smallestNumber);

//Realizando o teste com diferentes números no array
numbers = [9, 53, 49, 93, -73, 22, 68, 4, -3, -51, 48];
smallestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < smallestNumber) {
    smallestNumber = numbers[index];
  };
};

console.log (smallestNumber);

//Realizando o teste com diferentes números no array entre -1000 e 10000
numbers = [-424, 410, -101, -262, -178, 959, -805, -440, 17, 788, -495, -277, 536];
smallestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < smallestNumber) {
    smallestNumber = numbers[index];
  };
};

console.log (smallestNumber);

//Realizando o teste com diferentes números no array entre -1000 e 0
numbers = [-282, -755, -280, -544, -276, -549, -533, -614, -800, -34, -585, -993];
smallestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < smallestNumber) {
    smallestNumber = numbers[index];
  };
};

console.log (smallestNumber);

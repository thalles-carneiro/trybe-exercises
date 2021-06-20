//Exercício 5

//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

//Realiza o exercício utilizando apenas for
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let firstNumber = numbers[0];
let higherNumber = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (firstNumber >= numbers[index]) {
    if (firstNumber > higherNumber) {
      higherNumber = firstNumber;
    };
  } else {
    if (numbers[index] > higherNumber) {
      higherNumber = numbers[index];
    };
  };
};

console.log (higherNumber);

//Realiza o exercício utilizando apenas for - maneira mais eficiente e concisa

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  };
};

console.log (higherNumber);

//Realiza o exercício utilizando for/of
higherNumber = 0;

for (let number of numbers) {
  if (firstNumber >= number) {
    if (firstNumber > higherNumber) {
      higherNumber = firstNumber;
    };
  } else {
    if (number > higherNumber) {
      higherNumber = number;
    };
  };
};

console.log (higherNumber);

//Realizando o teste com diferentes números no array
numbers = [9, 53, 49, 93, -73, 22, 68, 4, -3, -51, 48];
firstNumber = numbers[0];
higherNumber = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (firstNumber >= numbers[index]) {
    if (firstNumber > higherNumber) {
      higherNumber = firstNumber;
    };
  } else {
    if (numbers[index] > higherNumber) {
      higherNumber = numbers[index];
    };
  };
};

console.log (higherNumber);

//Realizando o teste com diferentes números no array entre -1000 e 10000
numbers = [-424, 410, -101, -262, -178, 959, -805, -440, 17, 788, -495, -277, 536];
firstNumber = numbers[0];
higherNumber = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (firstNumber >= numbers[index]) {
    if (firstNumber > higherNumber) {
      higherNumber = firstNumber;
    };
  } else {
    if (numbers[index] > higherNumber) {
      higherNumber = numbers[index];
    };
  };
};

console.log (higherNumber);

//Realizando o teste com diferentes números no array entre -1000 e 0
numbers = [-282, -755, -280, -544, -276, -549, -533, -614, -800, -34, -585, -993];
firstNumber = numbers[0];
higherNumber = undefined;

for (let index = 0; index < numbers.length; index += 1) {
  if (firstNumber == numbers[index]) {
      higherNumber = firstNumber;
  } else if (firstNumber >= numbers[index]) {
    if (firstNumber > higherNumber) {
      higherNumber = firstNumber;
    };
  } else {
    if (numbers[index] > higherNumber) {
      higherNumber = numbers[index];
    };
  };
};

console.log (higherNumber);
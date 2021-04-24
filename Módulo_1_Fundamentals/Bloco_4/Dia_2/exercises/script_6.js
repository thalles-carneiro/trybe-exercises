//Exercício 6

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

//Realiza o exercício utilizando apenas for
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddCounter = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if ((numbers[index] % 2) !== 0) {
    oddCounter += 1;
  };
};

if (oddCounter == 0) {
  console.log('Nenhum valor ímpar encontrado');
} else {
  console.log(oddCounter);
};

//Realiza o exercício utilizando for/of
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
oddCounter = 0;

for (let number of numbers) {
  if (number % 2 !== 0) {
    oddCounter += 1;
  };
};

if (oddCounter == 0) {
  console.log('Nenhum valor ímpar encontrado');
} else {
  console.log(oddCounter);
};

//Testando apenas valores pares 
numbers = [6, 10, 4, 20, 70, 8, 100, 2, 36, 28];
oddCounter = 0;

for (let number of numbers) {
  if (number % 2 !== 0) {
    oddCounter += 1;
  };
};

if (oddCounter == 0) {
  console.log('Nenhum valor ímpar encontrado');
} else {
  console.log(oddCounter);
};

//Testando apenas valores ímpares 
numbers = [5, 11, 3, 21, 77, 9, 103, 1, 39, 25];
oddCounter = 0;

for (let number of numbers) {
  if (number % 2 !== 0) {
    oddCounter += 1;
  };
};

if (oddCounter == 0) {
  console.log('Nenhum valor ímpar encontrado');
} else {
  console.log(oddCounter);
};
//Exercício 3

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

//Realiza o exercício utilizando apenas for
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for ( let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

let average = sum / numbers.length;

console.log(average);

//Realiza o exercício utilizando for/of
sum = 0;

for (let number of numbers) {
  sum += number;
}

average = sum / numbers.length;

console.log(average);

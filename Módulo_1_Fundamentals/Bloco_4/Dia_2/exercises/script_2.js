//Exercício 2

//Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

//Realiza o exercício utilizando apenas for
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for ( let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}
console.log(sum);

//Realiza o exercício utilizando for/of
sum = 0;

for (let number of numbers) {
  sum += number;
}
console.log(sum);

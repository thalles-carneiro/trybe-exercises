//Exercício 1

//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

//Realiza o exercício utilizando apenas for
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

//Realiza o exercício utilizando for/of
for (let number of numbers) {
  console.log(number);
}
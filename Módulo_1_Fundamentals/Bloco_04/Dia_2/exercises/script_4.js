//Exercício 4

//Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

//Realiza o exercício utilizando apenas for
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for ( let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

let average = sum / numbers.length;

if (average > 20) {
  console.log("Média aritmética: " + average + ". Valor maior que 20.")
} else {
  console.log("Média aritmética: " + average + ". Valor menor ou igual a 20.")
}

//Realiza o exercício utilizando for/of
sum = 0;

for (let number of numbers) {
  sum += number;
}

average = sum / numbers.length;

if (average > 20) {
  console.log("Média aritmética: " + average + ". Valor maior que 20.")
} else {
  console.log("Média aritmética: " + average + ". Valor menor ou igual a 20.")
}

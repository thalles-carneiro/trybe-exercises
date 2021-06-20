//1. Crie uma função que receba um número e retorne seu fatorial.
// const factorial = (number) => {
//   let result = 1;
//   for (let index = number; index >= 2; index -= 1) {
//     result *= index;
//   };
//   return result;
// }
// console.log(`${5}! = ${factorial(5)}`);

//Bônus (opcional): tente fazer o mesmo exercício de forma recursiva.
// const factorial = (number) => {
//   let result = 1;
//   if (number < 2) {
//     return result;
//   } else {
//     result = number * factorial(number - 1);
//     return result;
//   }
// }
// console.log(`${4}! = ${factorial(4)}`);

//Spoiler: É possível resolver com uma linha usando ternary operator.
const factorial = (number) => number < 1 ? 1 : number * factorial(number - 1);
console.log(`${4}! = ${factorial(4)}`);
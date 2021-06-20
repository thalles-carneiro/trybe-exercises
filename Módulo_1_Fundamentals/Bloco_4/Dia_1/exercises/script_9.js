//Exercício 9

//Testando apenas um número ímpar

let a = 6;
let b = 10;
let c = 19;

let isOdd = true;

if ((a % 2) === 0 && (b % 2) === 0 && (c % 2) === 0) {
  isOdd = false;
}

console.log (isOdd);

//Testando dois números ímpares

a = 8;
b = 11;
c = 37;

isOdd = true;

if ((a % 2) === 0 && (b % 2) === 0 && (c % 2) === 0) {
  isOdd = false;
}

console.log (isOdd);

//Testando apenas números pares

a = 6;
b = 10;
c = 24;

isOdd = true;

if ((a % 2) === 0 && (b % 2) === 0 && (c % 2) === 0) {
  isOdd = false;
}

console.log (isOdd);
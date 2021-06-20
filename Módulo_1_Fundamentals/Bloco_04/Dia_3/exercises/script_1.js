//Exercício 1

console.log("Exercício 1");
console.log();

let n = 5;
let squareSide = "";

for (let index = 0; index < n; index += 1) {
  squareSide = squareSide + "*";
};

for (let index = 0; index < n; index += 1) {
  console.log(squareSide);
};

//Testando utilizando um valor diferente de n
console.log(); //Pulando uma linha entre os testes

n = 8;
squareSide = "";

for (let index = 0; index < n; index += 1) {
  squareSide = squareSide + "*";
};

for (let index = 0; index < n; index += 1) {
  console.log(squareSide);
};

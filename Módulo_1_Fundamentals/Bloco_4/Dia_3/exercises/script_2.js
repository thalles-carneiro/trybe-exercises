//Exercício 2

console.log("Exercício 2");
console.log();

let n = 5;
let triangleSide = "";

for (let index = 0; index < n; index += 1) {
  triangleSide = triangleSide + "*";
  console.log(triangleSide);
};

//Testando utilizando um valor diferente de n
console.log(); //Pulando uma linha entre os testes

n = 3;
triangleSide = "";

for (let index = 0; index < n; index += 1) {
  triangleSide = triangleSide + "*";
  console.log(triangleSide);
};

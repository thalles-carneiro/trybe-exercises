//Exercício 3

console.log("Exercício 3");
console.log();

let n = 5;

for (let lineIndex = 1; lineIndex <= n; lineIndex += 1) {

  let triangleSide = "";

  for (let columnIndex = 1; columnIndex <= n; columnIndex += 1) {
    
    if (columnIndex > n - lineIndex) {
      triangleSide = triangleSide + "*";
    } else {
      triangleSide = triangleSide + " ";
    };  
  };

  console.log(triangleSide);

};

//Testando utilizando um valor diferente de n
console.log(); //Pulando uma linha entre os testes

n = 10;

for (let lineIndex = 1; lineIndex <= n; lineIndex += 1) {

  let triangleSide = "";

  for (let columnIndex = 1; columnIndex <= n; columnIndex += 1) {
    
    if (columnIndex > n - lineIndex) {
      triangleSide = triangleSide + "*";
    } else {
      triangleSide = triangleSide + " ";
    };  
  };

  console.log(triangleSide);

};

//Exercício Bônus 1

console.log("Exercício Bônus 1");
console.log();

let n = 7;

if ((n % 2) === 0) {
  console.log ("O número não é apropriado para montar uma pirâmide com asteriscos de base. Inserir um valor ímpar.")
} else {
  
  let symbol = "*";
  let pyramidLine = "";
  let sideColumns = parseInt(n / 2);
  
  for (let lineIndex = 0; lineIndex < n - sideColumns; lineIndex += 1) {
  
    if (lineIndex !== n - sideColumns - 1) {
      
      for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
      
        if ((columnIndex === sideColumns - lineIndex) || (columnIndex === sideColumns + lineIndex)) {
          pyramidLine = pyramidLine + symbol;
        } else {
          pyramidLine = pyramidLine + " ";
        };

      };

    } else {

      for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
        pyramidLine = pyramidLine + symbol;
      };
    };

    console.log (pyramidLine);
    pyramidLine = "";

  };

};

//Teste utilizando um valor diferente de n (ímpar)
console.log(); //Pulando uma linha entre os testes

n = 11;

if ((n % 2) === 0) {
  console.log ("O número não é apropriado para montar uma pirâmide com asteriscos de base. Inserir um valor ímpar.")
} else {
  
  let symbol = "*";
  let pyramidLine = "";
  let sideColumns = parseInt(n / 2);
  
  for (let lineIndex = 0; lineIndex < n - sideColumns; lineIndex += 1) {
  
    if (lineIndex !== n - sideColumns - 1) {
      
      for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
      
        if ((columnIndex === sideColumns - lineIndex) || (columnIndex === sideColumns + lineIndex)) {
          pyramidLine = pyramidLine + symbol;
        } else {
          pyramidLine = pyramidLine + " ";
        };

      };

    } else {

      for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
        pyramidLine = pyramidLine + symbol;
      };
    };

    console.log (pyramidLine);
    pyramidLine = "";

  };

};

//Teste utilizando um valor diferente de n (par)
console.log(); //Pulando uma linha entre os testes

n = 8;

if ((n % 2) === 0) {
  console.log ("O número não é apropriado para montar uma pirâmide com asteriscos de base. Inserir um valor ímpar.")
} else {
  
  let symbol = "*";
  let pyramidLine = "";
  let sideColumns = parseInt(n / 2);
  
  for (let lineIndex = 0; lineIndex < n - sideColumns; lineIndex += 1) {
  
    if (lineIndex !== n - sideColumns - 1) {
      
      for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
      
        if ((columnIndex === sideColumns - lineIndex) || (columnIndex === sideColumns + lineIndex)) {
          pyramidLine = pyramidLine + symbol;
        } else {
          pyramidLine = pyramidLine + " ";
        };

      };

    } else {

      for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
        pyramidLine = pyramidLine + symbol;
      };
    };

    console.log (pyramidLine);
    pyramidLine = "";

  };

};

//Exercício Bônus 2

console.log("Exercício Bônus 2");
console.log();

let number = 7;
let divisibilityCounter = 1;

for (let index = 2; index <= number; index += 1) {
  if ((number % index) === 0) {
    divisibilityCounter += 1;
  };
};

if (divisibilityCounter === 2) {
  console.log (`O número ${number} é primo!!! :D`);
} else {
  console.log (`O número ${number} não é primo.. :(`);
};

//Teste com número diferente (primo)
console.log(); //Pulando uma linha entre os testes

number = 13;
divisibilityCounter = 1;

for (let index = 2; index <= number; index += 1) {
  if ((number % index) === 0) {
    divisibilityCounter += 1;
  };
};

if (divisibilityCounter === 2) {
  console.log (`O número ${number} é primo!!! :D`);
} else {
  console.log (`O número ${number} não é primo.. :(`);
};

//Teste com número diferente (não primo)
console.log(); //Pulando uma linha entre os testes

number = 1;
divisibilityCounter = 1;

for (let index = 2; index <= number; index += 1) {
  if ((number % index) === 0) {
    divisibilityCounter += 1;
  };
};

if (divisibilityCounter === 2) {
  console.log (`O número ${number} é primo!!! :D`);
} else {
  console.log (`O número ${number} não é primo.. :(`);
};

//Teste com número diferente (não primo)
console.log(); //Pulando uma linha entre os testes

number = 12;
divisibilityCounter = 1;

for (let index = 2; index <= number; index += 1) {
  if ((number % index) === 0) {
    divisibilityCounter += 1;
  };
};

if (divisibilityCounter === 2) {
  console.log (`O número ${number} é primo!!! :D`);
} else {
  console.log (`O número ${number} não é primo.. :(`);
};

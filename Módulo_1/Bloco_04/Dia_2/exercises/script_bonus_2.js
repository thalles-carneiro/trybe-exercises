//Exercício Bônus 2

//Ordene o array numbers em ordem decrescente e imprima seus valores;

//Utilizei da mesma lógica que no exercício anterior. A cada nova iteração pares são formados e varrem o array organizando de forma decrescente 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let iteration = 1; iteration < numbers.length; iteration += 1) {
  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > numbers[index - 1]) {
      let auxVariable = numbers[index - 1];
      numbers[index - 1] = numbers[index];
      numbers[index] = auxVariable;
    };
  };
};

console.log (numbers);

//Testando com novos valores entre -100 e 100
numbers = [4, -13, 74, -84, 39, 0, -97, -24, 91, 40];

for (let iteration = 1; iteration < numbers.length; iteration += 1) {
  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > numbers[index - 1]) {
      let auxVariable = numbers[index - 1];
      numbers[index - 1] = numbers[index];
      numbers[index] = auxVariable;
    };
  };
};

console.log (numbers);

//Exercício 9

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let newArray = [];

for (let index = 1; index <= 25; index += 1) {
  newArray.push(index);
};

//Realiza o exercício utilizando apenas for
let byTwoArray = [];

for (let index = 0; index < newArray.length; index += 1) {
  byTwoArray.push(newArray[index] / 2); 
};

console.log (byTwoArray);

//Realiza o exercício utilizando for/of
byTwoArray = [];

for (let number of newArray) {
  byTwoArray.push(number / 2); 
};

console.log (byTwoArray);

//Retornar o maior número do array - Utilizando o for
const numbers = [50, 85, -30, 3, 15];

let highestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if ( numbers[index] > highestNumber) {
    highestNumber = numbers[index];
  };
};

console.log(highestNumber);

//Retornar o maior número do array - Utilizando o reduce
const numbers = [50, 85, -30, 3, 15];

const getHighestNum = numbers.reduce((highest, current) => highest < current ? current : highest);

console.log(getHighestNum);

//Somar todos os números pares do array - Utilizando filter e reduce
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEvenNumbers = numbers
.filter((number) => number % 2 === 0)
.reduce((sum, num) => sum + num, 0);

console.log(sumEvenNumbers);

//Somar todos os números pares do array - Utilizando apenas reduce
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEvenNumbers = numbers
.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);

console.log(sumEvenNumbers);
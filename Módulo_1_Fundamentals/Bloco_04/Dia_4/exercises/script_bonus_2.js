//Exercícios Bônus

//Exercício 2
function arrayOfNumbers(vector) {
  let arrayOfEvenNumbers = [];
  for (let index = 0; index < vector.length; index += 1) {
    for (let subIndex = 0; subIndex < vector[index].length; subIndex += 1) {
      let number = vector[index][subIndex];
      if (number % 2 === 0) {
        arrayOfEvenNumbers.push(number);
      };
    };
  };
  return arrayOfEvenNumbers;
};

console.log(arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]));

//Parte II - Funções

//Exercício 5
console.log ('Exercício 5');
console.log ();

function moreRepeatedNumber(numbers) {

  let higherReapetNumber = numbers[0];  
  let higherReapetCount = 1;

  for (let number of numbers) {
    let repeatCount = 1;
    let repeatedNumber = number;
    
    for (let index = 1; index < numbers.length; index += 1) {
      if (numbers[index] === repeatedNumber) {
        repeatCount += 1;
      };
    };

    if (repeatCount > higherReapetCount) {
      higherReapetCount = repeatCount;
      higherReapetNumber = number; 
    };
  };
  return higherReapetNumber;
};

console.log (`O número que mais se repete é o ${moreRepeatedNumber([2, 3, 2, 5, 8, 2, 3])}.`);

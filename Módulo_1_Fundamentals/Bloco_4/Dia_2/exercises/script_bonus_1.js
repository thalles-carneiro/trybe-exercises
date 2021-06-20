//Exercício Bônus 1

//Ordene o array numbers em ordem crescente e imprima seus valores;

//Versão de código já pronta no course da Trybe
// for (let index = 1; index < array.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (array[index] < array[secondIndex]) {
//       let position = array[index];
//       array[index] = array[secondIndex];
//       array[secondIndex] = position;
//     };
//   };
// };

// console.log(array);


//Versão do código que produzi. A cada iteração pares são feitos e varrem o array ordenando os números de forma crescente
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let iterationIndex = 1; iterationIndex < numbers.length; iterationIndex += 1) {
  for ( let pairIndex = 0; pairIndex < numbers.length - iterationIndex; pairIndex += 1) {
    if (numbers[pairIndex + 1] < numbers[pairIndex]) {
      let auxiliarySwap = numbers[pairIndex + 1];
      numbers[pairIndex + 1] = numbers[pairIndex];
      numbers[pairIndex] = auxiliarySwap;
    };
  };
};

console.log (numbers);

//Testando com novos valores entre -100 e 100
numbers = [4, -13, 74, -84, 39, 0, -97, -24, 91, 40];

for (let iterationIndex = 1; iterationIndex < numbers.length; iterationIndex += 1) {
  for ( let pairIndex = 0; pairIndex < numbers.length - iterationIndex; pairIndex += 1) {
    if (numbers[pairIndex + 1] < numbers[pairIndex]) {
      let auxiliarySwap = numbers[pairIndex + 1];
      numbers[pairIndex + 1] = numbers[pairIndex];
      numbers[pairIndex] = auxiliarySwap;
    };
  };
};

console.log (numbers);

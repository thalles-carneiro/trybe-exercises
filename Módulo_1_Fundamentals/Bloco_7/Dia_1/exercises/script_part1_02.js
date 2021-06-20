// const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// const crescentOrder = (array) => {
//   for (let currentIndex = 1; currentIndex < array.length; currentIndex += 1) {
//     for (let previousIndex = 0; previousIndex < currentIndex; previousIndex += 1) {
//       if (array[previousIndex] > array[currentIndex]) {
//         let aux = array[previousIndex];
//         array[previousIndex] = array[currentIndex];
//         array[currentIndex] = aux;
//       }
//     }
//   }
//   const arrayString = array.join(', ');
//   const finalString = `Os números ${arrayString} se encontram ordenados de forma crescente!`
//   return finalString;
// }
// console.log(crescentOrder(oddsAndEvens));

//Fazendo o mesmo exercício utilizando o método array.sort()

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const crescentOrder = (array) => {
  array.sort((a, b) => a - b);
  const arrayString = array.join(', ');
  const finalString = `Os números ${arrayString} se encontram ordenados de forma crescente!`
  return finalString;
}
console.log(crescentOrder(oddsAndEvens));
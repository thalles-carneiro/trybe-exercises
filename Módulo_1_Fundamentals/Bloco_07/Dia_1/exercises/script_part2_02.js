//2. Crie uma função que receba uma frase e retorne qual a maior palavra.
// const longestWord = (phrase) => {
//   const phraseArr = phrase.split(' ');
//   let longest = phraseArr[0];
//   for (let index = 1; index < phraseArr.length; index += 1) {
//     if (phraseArr[index].length > longest.length) {
//       longest = phraseArr[index];
//     }
//   }
//   return console.log(`A maior palavra da frase é "${longest}".`);
// };

// longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

//Longestword com sort em uma linha.
const longestWord = (phrase) => phrase.split(' ').sort((word1,word2) => word2.length - word1.length)[0];
console.log(`A maior palavra da frase é "${longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")}".`)

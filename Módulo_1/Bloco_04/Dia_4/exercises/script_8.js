//Parte II - Funções

//Exercício 7
console.log ('Exercício 7');
console.log ();

function verifyEndingWord(word, ending) {
  let wordArray = word.split('');
  let endingArray = ending.split('');
  let startIndex = wordArray.length - endingArray.length;
  let endingOfWord;
  for (let index = startIndex, index2 = 0; index < wordArray.length; index += 1, index2 += 1) {
    if (wordArray[index] === endingArray[index2]){
      endingOfWord = true;
    } else {
      endingOfWord = false;
      break;
    };
  };
  return endingOfWord;
};

console.log(verifyEndingWord('trybe', 'be'));
console.log(verifyEndingWord('joaofernando', 'nanto'));


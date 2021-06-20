//Parte II - Funções

//Exercício 1
console.log ('Exercício 1');
console.log ();

//Função que valida se a palavra é ou não um palíndromo
function palindrome(word) {
  let wordLowerCase = word.toLowerCase();
  let wordIsPalindrome = false;
  let storeWord = '';
  
  for (let characterIndex = 0; characterIndex < word.length; characterIndex += 1) {
    let backwardIndex = (word.length - 1) - characterIndex;
    storeWord += wordLowerCase[backwardIndex];
  };
  
  storeWord = storeWord.replace(/ /g, '');
  wordLowerCase = wordLowerCase.replace(/ /g, '');
  
  if (storeWord === wordLowerCase) {
    wordIsPalindrome = true;
  } else {
    wordIsPalindrome = false;
  };

  return wordIsPalindrome;
};

//Teste com palavra palíndroma
console.log ();
console.log ('Teste com palavra palíndroma:');
console.log ();

console.log(palindrome('arara'));

//Teste com palavra não palíndroma
console.log ();
console.log ('Teste com palavra não palíndroma:');
console.log ();

console.log(palindrome('desenvolvimento'));

//Teste com frase palíndroma
console.log ();
console.log ('Teste com frase palíndroma:');
console.log ();

console.log(palindrome('Anotaram a data da maratona'));

//Parte II - Funções

//Exercício 4
console.log ('Exercício 4');
console.log ();

function largestWord(words) {
  let largerCharacterCount = words[0];
  for (let index in words) {
    if (largerCharacterCount.length < words[index].length) {
      largerCharacterCount = words[index];
    };
  };
  return largerCharacterCount;
};

console.log (`${largestWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])} é o nome com a maior quantidade de caracteres.`);

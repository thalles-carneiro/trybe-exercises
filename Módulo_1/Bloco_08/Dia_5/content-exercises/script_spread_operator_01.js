// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Morango', 'Maça'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Iogurte', 'Amendoim', 'Granola'];

const fruitSalad = (fruit, additional) => {
  const fruitSaladWithAdditional = [...fruit, ...additional];
  return fruitSaladWithAdditional;
};

console.log(fruitSalad(specialFruit, additionalItens));
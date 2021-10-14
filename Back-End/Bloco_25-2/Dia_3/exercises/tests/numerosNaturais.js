function numNatural(numero) {
  if(typeof numero !== 'number') return 'O parâmetro deve ser um número';
  if(numero > 0) return 'positivo';
  if(numero < 0) return 'negativo';
  return 'neutro';
}

module.exports = numNatural;

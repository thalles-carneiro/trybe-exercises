function techList(techArray, name) {
  if (techArray.length === 0) return 'Vazio!';
  const sortedTechs = techArray.sort().map((tech) => ({tech, name}));
  return sortedTechs;
}

module.exports = techList;
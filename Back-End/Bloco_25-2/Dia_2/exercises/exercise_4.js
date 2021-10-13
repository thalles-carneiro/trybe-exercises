const fs = require('fs').promises;

async function getSimpsons() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then(JSON.parse);

  simpsons.forEach(({ id, name }) => console.log(`${id} - ${name}`));
}
// getSimpsons();

async function getSimpsonById(id) {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then(JSON.parse);

    const chosenSimpson = simpsons.find((simpson) => simpson.id === id);

    if(!chosenSimpson) throw new Error('ID não encontrado');

    return chosenSimpson;
}

// getSimpsonById('1')
//   .then(console.log)
//   .catch((err) => console.log(err.message));

async function filterSimpsons() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then(JSON.parse);

  const filteredSimpsons = simpsons.filter(({ id }) => !['6', '10'].includes(id));

  await fs.writeFile('./simpsons.json', JSON.stringify(filteredSimpsons));
}
// filterSimpsons();

async function createSimpsonsFamily() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then(JSON.parse);

  const simpsonsFamily = simpsons.filter(({ id }) => ['1', '2', '3','4'].includes(id));

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily), { flag: 'wx'});
}
// createSimpsonsFamily();

async function addNelsonToFamily() {
  const simpsonsFamily = await fs
    .readFile('./simpsonsFamily.json', 'utf-8')
    .then(JSON.parse);
    
    const nelsonMuntz = {
      id: '5',
      name: 'Nelson Muntz',
    };

  const simpsonsFamilyUpdate = [...simpsonsFamily, nelsonMuntz];

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamilyUpdate));
}
// addNelsonToFamily();

async function replaceNelson() {
  const simpsonsFamily = await fs
    .readFile('./simpsonsFamily.json', 'utf-8')
    .then(JSON.parse);

  const simpsonsFamilyWithoutNelson = simpsonsFamily.filter(({ name }) => name !== 'Nelson Muntz');
  const simpsonsFamilyWithMaggie = simpsonsFamilyWithoutNelson.concat([{ id: '5', name: 'Maggie Simpson' }]);

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamilyWithMaggie));
}
// replaceNelson();

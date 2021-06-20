const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const studentSkills = (studentObj) => {
  const listOfSkills = Object.keys(studentObj);
  for (const skill in listOfSkills) {
    const finalString = `${listOfSkills[skill]}, Nível: ${studentObj[listOfSkills[skill]]}\n`;
    console.log(finalString);
  }
}

console.log('Estudante 1\n');
studentSkills(student1);

console.log('Estudante 2\n');
studentSkills(student2);
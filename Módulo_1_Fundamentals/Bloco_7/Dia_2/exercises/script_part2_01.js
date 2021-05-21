const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//1. Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addNewShift = (object, key, value) => {
  object[key] = value;
};
addNewShift(lesson2, 'turno', 'manhã');
console.log(lesson2);
console.log('--------------');

//2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const objKeys = (obj) => Object.keys(obj);
console.log(objKeys(lesson1));
console.log('--------------');

//3. Crie uma função para mostrar o tamanho de um objeto.
const objLength = (obj) => Object.entries(obj).length;
console.log(objLength(lesson1));
console.log('--------------');

//4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const objValues = (obj) => Object.values(obj);
console.log(objValues(lesson1));
console.log('--------------');

//5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 .
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);
console.log('--------------');

//6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const studentsTotal = (obj) => {
  let students = 0;
  for (let lesson in obj) {
    students += obj[lesson].numeroEstudantes;
  }
  return students;
};
console.log(studentsTotal(allLessons));
console.log('--------------');

//7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. 
const getValueByNumber = (obj, index) => Object.values(obj)[index];
console.log(getValueByNumber(lesson1, 0)); // Output: 'Matématica'
console.log('--------------');

//8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
const verifyPair = (obj, key, value) => (obj[key] === value) ? true : false;
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
console.log(verifyPair(lesson2,'professor','Carlos'));
// Output: true
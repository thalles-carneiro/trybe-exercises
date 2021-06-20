//Parte I - Objetos e For/in

//Exercício 1
console.log ('Exercício 1');
console.log ();

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
};

console.log(`Bem-vinda, ${info.personagem}`)

//Exercício 2
console.log ();
console.log ('Exercício 2');
console.log ();

info.recorrente = 'Sim';
console.log(info);

//Exercício 3
console.log ();
console.log ('Exercício 3');
console.log ();

for (let key in info) {
  console.log(key);
};

//Exercício 4
console.log ();
console.log ('Exercício 4');
console.log ();

for (let key in info) {
  console.log(info[key]);
};

//Exercício 5
console.log ();
console.log ('Exercício 5');
console.log ();

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (let key in info) {
  if (info[key] === info2[key]) {
    console.log('Ambos recorrentes');
  } else {
    console.log(`${info[key]} e ${info2[key]}`);
  };
};

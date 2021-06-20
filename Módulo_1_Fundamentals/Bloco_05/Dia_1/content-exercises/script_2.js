//Exercício de Fixação - Parte III - Qual seletor usar?

//Inserir backgroundColor no header
let headerContainer = document.getElementById('header-container');
headerContainer.style.backgroundColor = 'rgb(0, 176, 105)';

//Insere um backgroungColor na section do lado esquerdo
let emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'rgb(255, 159, 132)';

//Insere um backgroungColor nos h3 que estão na primeira section (esquerda)
let emergencyTasksTitles = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksTitles.length; index += 1) {
  emergencyTasksTitles[index].style.backgroundColor = 'rgb(165, 0, 243)';
};

//Insere um backgroungColor na section da direita
let noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = 'rgb(249, 219, 94)';

//Insere um backgroungColor nos h3 que estão na segunda section (direita)
let noEmergencyTasksTitles = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksTitles.length; index += 1) {
  noEmergencyTasksTitles[index].style.backgroundColor = 'rgb(35, 37, 37)';
};

//Insere um backgroungColor no footer
let footerContainer = document.getElementById('footer-container');
footerContainer.style.backgroundColor = 'rgb(0, 53, 51)';
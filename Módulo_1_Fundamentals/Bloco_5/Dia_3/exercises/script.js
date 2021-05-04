function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

//Exercício 1
function createzDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const getMonthDaysList = document.querySelector('#days');

  for (let day of dezDaysList) {
    const monthDaysListItem = document.createElement('li');
    monthDaysListItem.innerHTML = day;
    monthDaysListItem.className = 'day';
    if (day === 24 || day === 25 || day === 31) {
      monthDaysListItem.classList.add('holiday');
    };
    if (day === 4 || day === 11 || day === 18 || day === 25) {
      monthDaysListItem.classList.add('friday');
    };
    getMonthDaysList.appendChild(monthDaysListItem);
  };
};

createzDaysOfTheMonth();

//Exercício 2
function createHolidayButton(buttonName) {
  const getButtonsContainer = document.querySelector('.buttons-container');
  const holidayButton = document.createElement('button');
  holidayButton.innerHTML = buttonName;
  holidayButton.id = 'btn-holiday';
  getButtonsContainer.appendChild(holidayButton);
};

createHolidayButton('Feriados');

//Exercício 3
function displayHolidays() {
  const getHolidayButton = document.getElementById('btn-holiday');
  const getDaysOfHoliday = document.getElementsByClassName('holiday');
  const backgroundColor = 'rgb(238,238,238)';
  const setNewColor = 'coral';
  
  getHolidayButton.addEventListener('click', function () {
    for (let day of getDaysOfHoliday) {
      if (day.style.backgroundColor === setNewColor) {
        day.style.backgroundColor = backgroundColor;
      } else {
        day.style.backgroundColor = setNewColor;
      };
    };
  });
};

displayHolidays();

//Exercício 4
function createFridayButton(buttonName) {
  const getButtonsContainer = document.querySelector('.buttons-container');
  const fridayButton = document.createElement('button');
  fridayButton.innerHTML = buttonName;
  fridayButton.id = 'btn-friday';
  getButtonsContainer.appendChild(fridayButton);
};

createFridayButton('Sexta-feira');

//Exercício 5
function changeFridaysText(fridaysArray) {
  const getFridayButton = document.getElementById('btn-friday');
  const getDaysOfFriday = document.getElementsByClassName('friday');
  const fridayNewText = 'SEXTOU!!';
  
  getFridayButton.addEventListener('click', function () {
    for (let index = 0; index < getDaysOfFriday.length; index += 1) {
      if (getDaysOfFriday[index].innerHTML !== fridayNewText) {
        getDaysOfFriday[index].innerHTML = fridayNewText;
      } else {
        getDaysOfFriday[index].innerHTML = fridaysArray[index];
      };
    };
  });
};

let decemberFridays = [4, 11, 18, 25];
changeFridaysText(decemberFridays);

//Exercício 6
function zoomInEffect() {
  const getDays = document.getElementsByClassName('day');

  for (let index = 0; index < getDays.length; index += 1) {
    getDays[index].addEventListener('mouseover', function (event) {
      event.target.style.fontSize = 'xx-large';
      event.target.style.fontWeight = 'bolder';
      event.target.style.transition = 'all 1s';
    });
  };
};

function zoomOutEffect() {
  const getDays = document.getElementsByClassName('day');
  
  for (let index = 0; index < getDays.length; index += 1) {
    getDays[index].addEventListener('mouseout', function (event) {
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = 'unset';
    });
  };
};

zoomInEffect();
zoomOutEffect();

//Exercício 7
function createTaskInCalendar(task) {
  const getMyTasks = document.querySelector('.my-tasks');
  const createTask = document.createElement('span');
  createTask.innerHTML = task;
  getMyTasks.appendChild(createTask);
};

createTaskInCalendar('Estudar conteúdo do dia 5.3');

//Exercício 8
function addTaskSubtitle(color) {
  const getMyTasks = document.querySelector('.my-tasks');
  const createTaskSubtitle = document.createElement('div');
  createTaskSubtitle.className = 'task';
  createTaskSubtitle.style.backgroundColor = color;
  getMyTasks.appendChild(createTaskSubtitle);
};

addTaskSubtitle('seagreen');

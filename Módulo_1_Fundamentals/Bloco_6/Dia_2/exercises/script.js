const selectState = document.getElementById('input-state');
allStatesInfos();

//Gera as opções de escolha dos estados brasileiros
function allStatesInfos() {
  const allInitials = ['ac', 'al', 'ap', 'am', 'ba', 'ce', 'df', 'es', 'go', 'ma', 'mt', 'ms', 'mg', 'pa', 'pb', 'pr', 'pe', 'pi', 'rj', 'rn', 'rs', 'ro', 'rr', 'sc', 'sp', 'se', 'to'];
  const allStatesOfBrazil = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
  for (let index = 0; index < allStatesOfBrazil.length; index += 1) {
    const newState = document.createElement('option');
    newState.innerText = allStatesOfBrazil[index];
    newState.value = allInitials[index];
    selectState.appendChild(newState);
  }
}

//Utilizando a biblioteca de date picker Pickaday em conjunto do Moment.js
let picker = new Pikaday({
  field: document.getElementById('start-role-date'),
  format: 'DD/MM/YYYY',
  defaultDate: '01/01/2021',
  setDefaultDate: true,
  showDaysInNextAndPreviousMonths: true,
  enableSelectionDaysInNextAndPreviousMonths: true,
  i18n: {
    previousMonth : 'Mês Anterior',
    nextMonth     : 'Próximo Mês',
    months        : ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    weekdays      : ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
    weekdaysShort : ['Dom','Seg','Ter','Qua','Qui','Sex','Sab']
  },
});

//Utilizando a biblioteca de validações Just-validate
new window.JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      maxLength: 40,
    },
    email: {
      required: true,
      email: true,
      maxLength: 50,
    },
    cpf: {
      required: true,
      strength: {custom: /^\d{11}$/},
      minLength: 11,
      maxLength: 11,
    },
    address: {
      required: true,
      maxLength: 200,
    },
    city: {
      required: true,
      maxLength: 28,
    },
    curriculum_resume: {
      required: true,
      maxLength: 1000,
    },
    role: {
      required: true,
      maxLength: 40,
    },
    role_description: {
      required: true,
      maxLength: 500,
    },
    start_role_date: {
      required: true,
    },
  },

  messages: {
    name: {
      required: 'O campo é obrigatório',
      maxLength: 'O campo deve conter no máximo 40 caracteres',
    },
    email: {
      required: 'O campo é obrigatório',
      email: 'Por favor, digite um email válido',
    },
    cpf: {
      required: 'O campo é obrigatório',
      strength: 'Por favor, digite um CPF válido',
      minLength: 'Por favor, digite um CPF válido',
      maxLength: 'Por favor, digite um CPF válido',
    },
    address: {
      required: 'O campo é obrigatório',
      maxLength: 'O campo deve conter no máximo 200 caracteres',
    },
    city: {
      required: 'O campo é obrigatório',
      maxLength: 'O campo deve conter no máximo 28 caracteres',
    },
    curriculum_resume: {
      required: 'O campo é obrigatório',
      maxLength: 'O campo deve conter no máximo 1000 caracteres'
    },
    role: {
      required: 'O campo é obrigatório',
      maxLength: 'O campo deve conter no máximo 40 caracteres'
    },
    role_description: {
      required: 'O campo é obrigatório',
      maxLength: 'O campo deve conter no máximo 500 caracteres'
    },
    start_role_date: {
      required: 'O campo é obrigatório',
    },
  },

  focusWrongField: true,

  submitHandler: function (form, values) {
    console.log(form, values);
  },
  
  invalidFormCallback: function (errors) {
    console.log(errors);
  },
});
import React from 'react';
// import PropTypes from 'prop-types';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import './Form.css';

const civilStatusOptions = ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)'];

class Form extends React.Component {
  render() {
    return (
      <form className="form-container">
        <Input
          name="fullname"
          id="fullname-input"
          label="Nome Completo"
          type="text"
        />
        <Input
          name="age"
          id="age-input"
          label="Idade"
          type="number"
        />
        <TextArea
          name="description"
          id="description-input"
          label="Descrição"
        />
        <Select
          name="civil-status"
          id="civil-status-select"
          label="Selecione o seu estado civil"
          options={ civilStatusOptions }
        />
      </form>
    );
  }
}

export default Form;

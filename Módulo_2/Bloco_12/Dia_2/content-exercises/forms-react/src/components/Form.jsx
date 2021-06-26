import React from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import InputCheckbox from './InputCheckbox';
import './Form.css';

const civilStatusOptions = ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)'];

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      fullname: '',
      age: '',
      description: '',
      civilStatus: civilStatusOptions[0],
      terms: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, type } = target;
    const value = (type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { fullname, age, description, civilStatus, terms } = this.state;

    return (
      <form className="form-container">

        <Input
          id="fullname"
          name="fullname"
          type="text"
          value={ fullname }
          label="Nome Completo"
          handleChange={ this.handleChange }
        />

        <Input
          id="age"
          name="age"
          type="number"
          value={ age }
          label="Idade"
          handleChange={ this.handleChange }
        />

        <TextArea
          id="description"
          name="description"
          value={ description }
          label="Descrição"
          handleChange={ this.handleChange }
        />

        <Select
          id="civilStatus"
          name="civilStatus"
          value={ civilStatus }
          label="Selecione o seu estado civil"
          options={ civilStatusOptions }
          handleChange={ this.handleChange }
        />

        <InputCheckbox
          id="terms"
          name="terms"
          type="checkbox"
          label="Concordo com termos e acordos"
          checked={ terms }
          handleChange={ this.handleChange }
        />

      </form>
    );
  }
}

export default Form;

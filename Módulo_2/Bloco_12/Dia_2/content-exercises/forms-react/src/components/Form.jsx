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
      formWithErrors: false,
    };

    this.handleErrors = this.handleError.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleError() {
    const { fullname, age, description } = this.state;

    const maxLengthFullname = 40;
    const maxLengthAge = 3;
    const maxLengthDescription = 200;

    const errorCases = [
      fullname.length > maxLengthFullname,
      age.length > maxLengthAge,
      description.length > maxLengthDescription,
    ];

    const formHasErrors = errorCases.some((error) => error === true);

    if (formHasErrors === true) {
      this.setState({
        formWithErrors: true,
      });
    } else {
      this.setState({
        formWithErrors: false,
      });
    }
  }

  handleChange({ target }) {
    const { name, type } = target;
    const value = (type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.handleError());
  }

  render() {
    const { fullname, age, description, civilStatus, terms, formWithErrors } = this.state;
    const errorMsg = 'Por gentileza, insira valores válidos.';
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
        { (formWithErrors) ? <span style={ { color: 'red' } }>{errorMsg}</span> : ''}
      </form>
    );
  }
}

export default Form;

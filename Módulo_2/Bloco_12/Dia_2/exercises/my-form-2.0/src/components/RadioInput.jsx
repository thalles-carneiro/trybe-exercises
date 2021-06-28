import React, { Component } from 'react';

class RadioInput extends Component {
  render() {
    const { label, type, name, handleChange  } = this.props;

    return (
      <label>

        <label htmlFor={ name }>
          <input
          type={ type }
          id={ name }
          name={ name }
          value="Casa"
          onChange={ handleChange }
          />
          Casa
        </label>

        <label htmlFor={ name }>
          <input
          type={ type }
          id={ name }
          name={ name }
          value="Apartamento"
          onChange={ handleChange }
          />
          Apartamento
        </label>

        { label }
      </label>

    );
  }
}

export default RadioInput;
import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { label, type, name, placeholder  } = this.props;
    const { maxLength, value, required, handleChange } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <input
        type={ type }
        id={ name }
        name={ name }
        placeholder={ placeholder }
        maxLength={ maxLength }
        value={ value }
        required={ required }
        onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Input;
import React, { Component } from 'react';

class TextArea extends Component {
  render() {
    const { label, name, placeholder, cols, rows  } = this.props;
    const { maxLength, value, required, handleChange } = this.props;

    return (
      <label htmlFor={ name }>
        { label }
        <textarea
        id={ name }
        name={ name }
        placeholder={ placeholder }
        cols={ cols }
        rows={ rows }
        maxLength={ maxLength }
        value={ value }
        required={ required }
        onChange={ handleChange }
        >
      </textarea>
    </label>
    );
  }
}

export default TextArea;
import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

class Input extends React.Component {
  render() {
    const { id, name, label, type, value, handleChange } = this.props;

    const maxLengthName = 40;
    const maxLengthAge = 3;
    let error;
    if (name === 'fullname' && value.length > maxLengthName) {
      error = 'Texto muito grande!';
    }
    if (name === 'age' && value.length > maxLengthAge) {
      error = 'Insira uma idade válida!';
    }

    return (
      /** Fonte: https://stackoverflow.com/questions/62306461/label-must-have-associated-control */
      <label className="input-label-form" htmlFor={ id }>
        { label }
        <input
          id={ id }
          name={ name }
          type={ type }
          value={ value }
          onChange={ handleChange }
          className="input-form"
        />
        <span className="max-length-error">{(error !== undefined) ? error : ''}</span>
      </label>
    );
  }
}

Input.propTypes = PropTypes.exact({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  handleChange: PropTypes.func.isRequired,
}).isRequired;

export default Input;

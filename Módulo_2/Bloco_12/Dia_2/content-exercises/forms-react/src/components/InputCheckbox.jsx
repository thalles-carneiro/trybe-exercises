import React from 'react';
import PropTypes from 'prop-types';
import './InputCheckbox.css';

class InputCheckbox extends React.Component {
  render() {
    const { id, name, type, label, checked, handleChange } = this.props;

    return (
      /** Fonte: https://stackoverflow.com/questions/62306461/label-must-have-associated-control */
      <label className="input-checkbox-label-form" htmlFor={ id }>
        { label }
        <input
          id={ id }
          name={ name }
          type={ type }
          checked={ checked }
          onChange={ handleChange }
          className="input-checkbox-form"
        />
      </label>
    );
  }
}

InputCheckbox.propTypes = PropTypes.exact({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
}).isRequired;

export default InputCheckbox;

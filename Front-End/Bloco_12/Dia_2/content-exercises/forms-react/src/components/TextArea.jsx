import React from 'react';
import PropTypes from 'prop-types';
import './TextArea.css';

class TextArea extends React.Component {
  render() {
    const { id, name, label, value, handleChange } = this.props;

    const maxLength = 200;
    let error;
    if (value.length > maxLength) {
      error = 'Texto muito grande!';
    }

    return (
      /** Fonte: https://stackoverflow.com/questions/62306461/label-must-have-associated-control */
      <label className="textarea-label-form" htmlFor={ id }>
        { label }
        <textarea
          id={ id }
          name={ name }
          value={ value }
          onChange={ handleChange }
          className="textarea-form"
        />
        <span className="max-length-error">
          {(error !== undefined) ? error : ''}
        </span>
      </label>
    );
  }
}

TextArea.propTypes = PropTypes.exact({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}).isRequired;

export default TextArea;

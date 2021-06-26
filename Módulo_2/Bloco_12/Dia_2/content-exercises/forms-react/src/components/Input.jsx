import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    const { name, id, label, type } = this.props;
    const { inputValue } = this.state;
    return (
      /** Fonte: https://stackoverflow.com/questions/62306461/label-must-have-associated-control */
      <label className="input-label-form" htmlFor={ id }>
        { label }
        <input
          className="input-form"
          name={ name }
          id={ id }
          type={ type }
          value={ inputValue }
          onChange={ this.handleOnChange }
        />
      </label>
    );
  }
}

Input.propTypes = PropTypes.exact({
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
}).isRequired;

export default Input;

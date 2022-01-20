import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';
import './Select.css';

class Select extends React.Component {
  render() {
    const { id, name, label, value, options, handleChange } = this.props;
    return (
      <label className="select-label-form" htmlFor={ id }>
        { label }
        <select
          id={ id }
          name={ name }
          value={ value }
          onChange={ handleChange }
          className="select-form"
        >
          {options.map((option) => <Option key={ option } option={ option } />)}
        </select>
      </label>
    );
  }
}

Select.propTypes = PropTypes.exact({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
}).isRequired;

export default Select;

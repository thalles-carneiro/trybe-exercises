import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';
import './Select.css';

class Select extends React.Component {
  constructor(props) {
    super();
    this.state = {
      value: props.options[0],
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { name, id, label, options } = this.props;
    const { value } = this.state;
    return (
      <label className="select-label-form" htmlFor={ id }>
        { label }
        <select
          className="select-form"
          name={ name }
          id={ id }
          value={ value }
          onChange={ this.handleOnChange }
        >
          {options.map((option) => <Option key={ option } option={ option } />)}
        </select>
      </label>
    );
  }
}

Select.propTypes = PropTypes.arrayOf(PropTypes.string).isRequired;

export default Select;

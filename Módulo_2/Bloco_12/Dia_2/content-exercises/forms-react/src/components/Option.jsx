import React from 'react';
import PropTypes from 'prop-types';

class Option extends React.Component {
  render() {
    const { option } = this.props;
    return (
      <option value={ option }>
        {option}
      </option>
    );
  }
}

Option.propTypes = PropTypes.string.isRequired;

export default Option;

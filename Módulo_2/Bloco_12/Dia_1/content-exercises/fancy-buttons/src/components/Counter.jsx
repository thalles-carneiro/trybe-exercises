import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  render() {
    const { clicks, btnText } = this.props;
    return (
      <p>{`Qtd. de cliques no ${btnText.toLowerCase()}: ${clicks}`}</p>
    );
  }
}

Counter.propTypes = PropTypes.exact({
  clicks: PropTypes.number,
  btnText: PropTypes.string,
}).isRequired;

export default Counter;

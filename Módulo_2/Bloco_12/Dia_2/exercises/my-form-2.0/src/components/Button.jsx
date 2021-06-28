import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { type, value, onClick } = this.props;

    return (
      <button
        type={ type }
        value={ value }
        onClick={ onClick }
      >
        { value }
      </button>
    );
  }
}

export default Button;
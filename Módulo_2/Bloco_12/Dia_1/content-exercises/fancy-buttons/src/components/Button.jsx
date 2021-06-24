import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

class Button extends Component {
  constructor() {
    super();
    this.state = {
      clickCounter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(text) {
    console.log(`Ih, cliquei no ${text}!`);
    this.setState(({ clickCounter }) => ({
      clickCounter: clickCounter + 1,
    }));
  }

  render() {
    const { btnText } = this.props;
    const { clickCounter } = this.state;
    return (
      <div>
        <button type="button" onClick={ () => this.handleClick(btnText) }>
          { btnText }
        </button>
        <Counter clicks={ clickCounter } btnText={ btnText } />
      </div>
    );
  }
}

Button.propTypes = PropTypes.exact({
  btnText: PropTypes.string,
}).isRequired;

export default Button;

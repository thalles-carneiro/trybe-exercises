import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

class Button extends Component {
  constructor() {
    super();
    this.state = {
      clickCounter: 0,
      btnColor: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(text) {
    const { clickCounter } = this.state;
    this.setState((state) => ({
      clickCounter: state.clickCounter + 1,
    }));
    if (clickCounter % 2 === 1) {
      this.setState(() => ({ btnColor: 'btn-green' }));
      console.log(`Ih, o ${text} está VERDE!`);
    } else {
      this.setState(() => ({ btnColor: '' }));
      console.log(`Ih, o ${text} está CINZA!`);
    }
  }

  render() {
    const { btnText } = this.props;
    const { clickCounter, btnColor } = this.state;
    const clickFunc = () => this.handleClick(btnText);
    return (
      <div>
        <button type="button" className={ btnColor } onClick={ clickFunc }>
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

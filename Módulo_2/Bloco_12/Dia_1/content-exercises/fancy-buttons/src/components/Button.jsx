import { Component } from 'react';

class Button extends Component {
  
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    const { btnText } = this.props;
    console.log(`Clicou no ${btnText}!`);
  }

  render() {
    const { btnText } = this.props;
    return (
      <button type="button" onClick={ this.handleClick }>{ btnText }</button>
    )
  }
}

export default Button;
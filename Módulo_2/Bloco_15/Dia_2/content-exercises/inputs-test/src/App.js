import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    };
  }

  handleInput({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { name, email } = this.state;
    return (
      <div>
        <h1>Teste de inputs</h1>
        <p>
          Nome:
          <input
            name="name"
            data-testid="input-name"
            value={ name }
            placeholder="Digite seu nome"
            onChange={ (e) => this.handleInput(e) }
          />
        </p>
        <p>
          E-mail:
          <input
            name="email"
            data-testid="input-email"
            value={ email }
            placeholder="Digite seu e-mail"
            onChange={ (e) => this.handleInput(e) }
          />
        </p>
      </div>
    );
  }
}

export default App;
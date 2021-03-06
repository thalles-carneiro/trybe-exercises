import React, { Component } from 'react';
import ValidEmail from './components/ValidEmail';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      saveEmail: '',
    };
  }

  changeEmail(value) {
    this.setState((prevState) => ({
      ...prevState,
      email: value,
    }));
  }

  changeSaveEmail(value) {
    this.setState((prevState) => ({
      ...prevState,
      saveEmail: value,
      email: '',
    }));
  }

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
        </label>
        <input
          id="id-email"
          value={email}
          type="email"
          onChange={(e) => this.changeEmail(e.target.value)}
        />
        <input
          id="btn-enviar"
          type="button"
          data-testid="id-send"
          value="Enviar"
          onClick={() => this.changeSaveEmail(email)}
        />
        <input id="btn-id" type="button" value="Voltar" />
        <ValidEmail email={saveEmail}/>
      </div>
    );
  }
}

export default App;

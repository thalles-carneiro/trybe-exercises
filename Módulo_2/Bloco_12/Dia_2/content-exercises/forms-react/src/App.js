import React from 'react';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <main className="main-container">
        <h1>Formulário</h1>
        <Form />
      </main>
    );
  }
}

export default App;

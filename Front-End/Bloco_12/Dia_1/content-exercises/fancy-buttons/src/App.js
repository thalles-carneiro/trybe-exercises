import React from 'react';
import './App.css';
import Button from './components/Button';

const buttons = [
  { id: 1, text: 'Botão 1' },
  { id: 2, text: 'Botão 2' },
  { id: 3, text: 'Botão 3' },
];

class App extends React.Component {
  render() {
    return (
      <>
        {buttons.map((button) => <Button key={ button.id } btnText={ button.text } />)}
      </>
    );
  }
}

export default App;

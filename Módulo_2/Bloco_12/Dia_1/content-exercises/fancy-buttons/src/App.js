import React from 'react';
import Button from './components/Button';

class App extends React.Component {

  render() {
    return (
      <>
        <Button btnText="Botão 1"/>
        <Button btnText="Botão 2"/>
        <Button btnText="Botão 3"/>
      </>
    );
  }
}

export default App;
import { render, screen } from '@testing-library/react';
import event from '@testing-library/user-event';
import App from './App';

describe('Teste de inputs' , () => {
  it('Alterando os valores dos campos e testando o valor guardado', () => {
    render(<App />);
    const inputName = screen.getByTestId('input-name');
    expect(inputName).toHaveValue('');
    event.type(inputName, 'Estudante da Trybe');
    expect(inputName).toHaveValue('Estudante da Trybe');

    const inputEmail = screen.getByTestId('input-email');
    expect(inputEmail).toHaveValue('');
    event.type(inputEmail, 'estudante@trybe.com');
    expect(inputEmail).toHaveValue('estudante@trybe.com');
  });
});

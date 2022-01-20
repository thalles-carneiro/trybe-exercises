import { render, screen } from '@testing-library/react';
import event from '@testing-library/user-event';
import App from '../App';

beforeEach( () => render(<App />));

test('Verificando se existe o campo Email.', () => {
  const inputEmail = screen.getByLabelText(/email/i);
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email');
});

test('Verificando se existe um botão de enviar', () => {
  const btn = screen.getByTestId('id-send');
  expect(btn).toBeInTheDocument();
  expect(btn.type).toBe('button');
  expect(btn).toHaveValue('Enviar');
});

test('Verificando se existem dois botões', () => {
  const buttons = screen.getAllByRole('button');
  expect(buttons.length).toBe(2);
});

test('Verificando se o botão e o campo email estão funcionando.', () => {
  const EMAIL_USER = 'email@email.com';

  const textEmail = screen.getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');
  event.type(inputEmail, EMAIL_USER);
  event.click(btnSend);
  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
});
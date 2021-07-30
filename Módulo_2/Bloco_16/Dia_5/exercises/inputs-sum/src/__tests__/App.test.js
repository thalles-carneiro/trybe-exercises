import React from 'react';
import event from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRedux from '../helpers/renderWithRedux';
import App from '../App';

describe('Testa a aplicação utilizando Redux', () => {
  beforeEach(() => {
    renderWithRedux(<App />);
  });

  it('Existem três inputs e um texto "0" indicando a soma inicial', () => {
    const inputs = screen.getAllByPlaceholderText(/digite um valor/i);
    const THREE = 3;
    expect(inputs).toHaveLength(THREE);

    const sum = screen.getByTestId('sumNumbers');
    expect(sum).toHaveTextContent(0);
  });

  it('Insere valores nos inputs e sua soma aparece na página', () => {
    const THREE = 3;
    const FIVE = 5;
    const SEVEN = 7;
    const FIFTEEN = 15;

    const input1 = screen.getByTestId('input1');
    event.type(input1, '3');
    expect(input1).toHaveValue(THREE);

    const input2 = screen.getByTestId('input2');
    event.type(input2, '5');
    expect(input2).toHaveValue(FIVE);

    const input3 = screen.getByTestId('input3');
    event.type(input3, '7');
    expect(input3).toHaveValue(SEVEN);

    const sum = screen.getByTestId('sumNumbers');
    expect(sum).toHaveTextContent(FIFTEEN);
  });
});

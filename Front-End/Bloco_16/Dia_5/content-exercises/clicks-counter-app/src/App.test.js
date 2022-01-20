import React from 'react';
import { screen } from '@testing-library/react';
import event from '@testing-library/user-event';
import renderWithRedux from './helpers/renderWithRedux';
import App from './App';

describe('Testing clicks', () => {
  it('The page should have a button and a text "0"', () => {
    renderWithRedux(<App />);
    const addButton = screen.queryByText(/clique aqui/i);

    expect(addButton).toBeInTheDocument();
    expect(screen.queryByText('0')).toBeInTheDocument();
  });

  it('The page should have a text "1" after a click in the button', () => {
    renderWithRedux(<App />);
    const addButton = screen.queryByText(/clique aqui/i);
    event.click(addButton);

    expect(screen.queryByText('1')).toBeInTheDocument();
  });

  it('A click in a button should increment the value of clicks', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 } } });
    const addButton = screen.queryByText(/clique aqui/i);

    event.click(addButton);
    event.click(addButton);
    expect(screen.queryByText('12')).toBeInTheDocument();
  });
});

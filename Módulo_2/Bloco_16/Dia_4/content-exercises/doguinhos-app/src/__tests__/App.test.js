import React from 'react';
import event from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/dom';
import fetchMock from 'fetch-mock-jest';
import App from '../App';
import renderWithRedux from '../helpers';

describe('Página inicial', () => {
  it('Testa que o botão de adicionar cachorro está presente', () => {
    renderWithRedux(<App />);
    const newDogBtn = screen.getByRole('button', /new dog/i);

    expect(newDogBtn).toBeInTheDocument();

    fetchMock.getOnce('https://dog.ceo/api/breeds/image/random', {
      body: { message: 'myDogUrl' },
    });

    event.click(newDogBtn);
    expect(fetchMock.called()).toBeTruthy();
  });
});

import React from 'react';
import event from '@testing-library/user-event';
import { screen } from '@testing-library/dom';
import App from '../App';
import renderWithRedux from '../helpers';
import { END_POINT } from '../redux/actions';

describe('Página inicial', () => {
  it('Testa que o botão de adicionar cachorro está presente', async () => {
    renderWithRedux(<App />);
    const newDogBtn = screen.getByRole('button', /new dog/i);

    expect(newDogBtn).toBeInTheDocument();

    fetch.mockResolvedValue(JSON.stringify({ message: 'myDogUrl' }));

    event.click(newDogBtn);
    await expect(fetch).toHaveBeenCalledTimes(1);
    await expect(fetch).toHaveBeenCalledWith(END_POINT);
  });
});

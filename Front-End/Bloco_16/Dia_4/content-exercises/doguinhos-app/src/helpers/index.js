import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';
import reducer from '../redux/reducers';

const createMockStore = (initialState) => (
  createStore(reducer, initialState, applyMiddleware(thunk))
);

const renderWithRedux = (
  component,
  { initialState, store = createMockStore(initialState) } = {},
) => ({
  ...render(<Provider store={ store }>{ component }</Provider>), store,
});

export default renderWithRedux;

import { ADD_CLICK } from '../actions';

const INITIAL_STATE = {
  counter: 0,
};

const clickReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_CLICK:
    return { counter: state.counter + 1 };
  default:
    return state;
  }
};

export default clickReducer;

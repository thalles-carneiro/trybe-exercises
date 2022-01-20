import { SUM_VALUE_1, SUM_VALUE_2, SUM_VALUE_3 } from '../actions';

const INITIAL_STATE = {
  sum: 0,
  value1: 0,
  value2: 0,
  value3: 0,
};

const sumReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SUM_VALUE_1:
    return { ...state, value1: action.value, sum: state.sum + action.value };
  case SUM_VALUE_2:
    return { ...state, value2: action.value, sum: state.sum + action.value };
  case SUM_VALUE_3:
    return { ...state, value3: action.value, sum: state.sum + action.value };
  default:
    return state;
  }
};

export default sumReducer;

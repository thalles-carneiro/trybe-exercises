import { combineReducers } from 'redux';
import sumReducer from './sumReducer';

const rootReducer = combineReducers({ sumReducer });

export default rootReducer;

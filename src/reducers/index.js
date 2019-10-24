import { combineReducers } from 'redux';
import userReducer from './userReducer';

const allReducers = {
  userReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
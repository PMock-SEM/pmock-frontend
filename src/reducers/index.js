import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authenticationReducer from './authenticationReducer';

const allReducers = {
  user: userReducer,
  auth: authenticationReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
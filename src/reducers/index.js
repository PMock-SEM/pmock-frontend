import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authenticationReducer from './authenticationReducer';
import userProfileReducer from './userProfileReducer';
import videoListReducer from './videoListReducer';

const allReducers = {
  user: userReducer,
  userProfile: userProfileReducer,
  videoList: videoListReducer,
  auth: authenticationReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
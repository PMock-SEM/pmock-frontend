import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authenticationReducer from './authenticationReducer';
import userProfileReducer from './userProfileReducer';
import videoListReducer from './videoListReducer';
import coachProfileReducer from './coachProfileReducer';
import videoDetailReducer from './videoDetailReducer';
import feedbackListReducer from './feedbackListReducer';
import coachListReducer from './coachListReducer';

const allReducers = {
  user: userReducer,
  userProfile: userProfileReducer,
  videoList: videoListReducer,
  feedbackList: feedbackListReducer,
  videoDetail: videoDetailReducer,
  auth: authenticationReducer,
  coachProfile: coachProfileReducer,
  coachList: coachListReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
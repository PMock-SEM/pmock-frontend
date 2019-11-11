import coachProfileActionTypes from '../actionTypes/coachProfileActionTypes';
import { stat } from 'fs';

const initialState = {
  coach: '',
  feedbacks: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case coachProfileActionTypes.COACH_PROFILE_LOADED:
      return {
        ...state,
        coach: action.payload.data
      };
    case coachProfileActionTypes.COACH_FEEDBACKS_LOADED:
      return {
        ...state,
        feedbacks: action.payload.data
      };
    default:
      return state;
  }
}

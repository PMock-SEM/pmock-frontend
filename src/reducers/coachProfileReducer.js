import coachProfileActionTypes from '../actionTypes/coachProfileActionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case coachProfileActionTypes.COACH_PROFILE_LOADED:
      return action.payload.data || false;
    default:
      return state;
  }
}

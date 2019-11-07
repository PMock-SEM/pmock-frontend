import userProfileActionTypes from '../actionTypes/userProfileActionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case userProfileActionTypes.USER_PROFILE_LOADED:
      return action.payload.data || false;
    default:
      return state;
  }
}

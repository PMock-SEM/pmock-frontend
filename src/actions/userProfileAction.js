import axios from 'axios';
import config from '../config';
import userProfileActionsTypes from '../actionTypes/userProfileActionTypes';

export function loadUserProfile(userId) {
  return async (dispatch) => {
    const response = await axios.get(`${config.api}/users/${userId}`);
    dispatch({
      type: userProfileActionsTypes.USER_PROFILE_LOADED,
      payload: response.data
    });
  }
}



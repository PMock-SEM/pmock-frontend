import axios from 'axios';
import config from '../config';
import coachProfileActionTypes from '../actionTypes/coachProfileActionTypes';

export function loadCoachProfile(coachId) {
  return async (dispatch) => {
    const response = await axios.get(`${config.api}/coaches/${coachId}`);
    dispatch({
      type: coachProfileActionTypes.COACH_PROFILE_LOADED,
      payload: response.data
    });
  }
}



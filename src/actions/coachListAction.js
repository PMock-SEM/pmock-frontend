import axios from 'axios';
import config from '../config';
import coachListActionTypes from '../actionTypes/coachListActionTypes';

export function loadCoachList() {
  return async (dispatch) => {
    const response = await axios.get(`${config.api}/coaches`);
    dispatch({
      type: coachListActionTypes.FETCH_COACH_LIST,
      payload: response.data
    });
  }
}


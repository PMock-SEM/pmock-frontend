import axios from 'axios';
import config from '../config';
import videoListActionTypes from '../actionTypes/videoListActionTypes';

export function loadVideoListByUserId(userId) {
  return async (dispatch) => {
    const response = await axios.get(`${config.api}/users/${userId}/videos`);
    dispatch({
      type: videoListActionTypes.FETCH_VIDEOS,
      payload: response.data
    });
  }
}



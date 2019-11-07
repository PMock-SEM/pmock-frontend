import axios from 'axios';
import config from '../config';
import videoDetailActionTypes from '../actionTypes/videoDetailActionTypes';

export function loadVideoDetail(videoId) {
  return async (dispatch) => {
    const response = await axios.get(`${config.api}/videos/${videoId}`);
    dispatch({
      type: videoDetailActionTypes.FETCH_VIDEO_DETAIL,
      payload: response.data
    });
  }
}



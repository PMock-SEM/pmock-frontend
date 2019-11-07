import axios from 'axios';
import config from '../config';
import feedbackListActionTypes from '../actionTypes/feedbackListActionTypes';

export function loadFeedbackListByVideoId(videoId) {
  return async (dispatch) => {
    const response = await axios.get(`${config.api}/videos/${videoId}/feedbacks`);
    dispatch({
      type: feedbackListActionTypes.FETCH_FEEDBACK_LIST,
      payload: response.data
    });
  }
}



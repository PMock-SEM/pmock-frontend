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

export function addFeedback(videoId, coachId, content) {
  return async (dispatch) => {
    const response = await axios.post(`${config.api}/feedbacks`, {
      coachId: coachId,
      videoId: videoId,
      content: content
    });
    dispatch({
      type: feedbackListActionTypes.ADD_FEEDBACK,
      payload: response.data
    })
  }
}



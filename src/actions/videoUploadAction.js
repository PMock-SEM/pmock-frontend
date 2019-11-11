import axios from 'axios';
import config from '../config';
import videoUploadActionTypes from '../actionTypes/videoUploadActionTypes';


export function uploadVideoAction(videoName, videoFile, userId) {
  return async (dispatch) => {
    let data = new FormData();
    data.append('file', videoFile);
    data.append('videoName', videoName);
    data.append('userId', userId);

    const response = await axios.post(`${config.api}/videos/upload`, data);
    dispatch({
      type: videoUploadActionTypes.UPLOAD_VIDEO,
      payload: response.data
    })
  }
}
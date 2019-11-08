import videoDetailActionTypes from '../actionTypes/videoDetailActionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case videoDetailActionTypes.FETCH_VIDEO_DETAIL:
      return action.payload.data || false;
    default:
      return state;
  }
}

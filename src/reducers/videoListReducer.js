import videoListActionTypes from '../actionTypes/videoListActionTypes';

const initialState = [];

export default function videoListReducer(state = initialState, action) {
  switch (action.type) {
    case videoListActionTypes.FETCH_VIDEOS:
      return action.payload.data || false;
    default: return state;
  };
}
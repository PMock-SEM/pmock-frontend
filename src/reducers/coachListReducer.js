import coachListActionTypes from '../actionTypes/coachListActionTypes';

const initialState = [];

export default function coachListReducer(state = initialState, action) {
  switch (action.type) {
    case coachListActionTypes.FETCH_COACH_LIST:
      return action.payload.data || false;

    default: return state;
  };
}
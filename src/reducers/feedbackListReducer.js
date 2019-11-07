import feedbackListActionTypes from '../actionTypes/feedbackListActionTypes';

const initialState = [];

export default function feedbackListReducer(state = initialState, action) {
  switch (action.type) {
    case feedbackListActionTypes.FETCH_FEEDBACK_LIST:
      return action.payload.data || false;
    default: return state;
  };
}
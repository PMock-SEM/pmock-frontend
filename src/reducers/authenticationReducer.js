import userActionTypes from '../actionTypes/userActionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case userActionTypes.FETCH_USER:
      return {
        ...action.payload.data
      };
    default:
      return state;
  }
}

import userActionTypes from '../actionTypes/userActionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case userActionTypes.FETCH_USER:
      console.log(action.payload.data)
      return action.payload.data || false;
    default:
      return state;
  }
}

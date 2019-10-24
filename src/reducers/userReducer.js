import userActionTypes from '../actionTypes/userActionTypes';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        isAuthenticated: action.isAuthenticated,
        user: action.user,
        token: action.token
      };
    default: return state;
  }
}
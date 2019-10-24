import axios from 'axios';
import config from '../config';
import setAuthorizationToken from '../auth/setAuthorizationToken';
import jwtDecode from 'jwt-decode';


export function login(userData) {
  return dispatch => {
    axios.post(`${config.api}/users/login`, { ...userData })
      .then(response => {
        const token = response.data.token;
        setAuthorizationToken(token);
        let userInfo = jwtDecode(token);
        dispatch(setCurrentUser(userInfo, token, true));
        //browserHistory.push('/');
      });
  }
}

export function setCurrentUser(user, token, authenticated) {
  return {
    type: 'SET_CURRENT_USER',
    user: user,
    token: token,
    isAuthenticated: authenticated
  };
}

export function logout() {
  return dispatch => {
    dispatch(setCurrentUser({}, null, false));
    setAuthorizationToken(false);
    //browserHistory.push('/');
  }
}

export function register(userData) {
  return (dispatch, state) => {
    axios.post(`${config.api}/users`, { data: userData })
      .then(response => {
        //browserHistory.push('/login');
      });
  }

}


import userActionTypes from '../actionTypes/userActionTypes';

export default function(state = null, action) {
	console.log(action);
	switch (action.type) {
		case userActionTypes.FETCH_USER:
			return action.payload || false;
		default: 
			return state;
	}
}

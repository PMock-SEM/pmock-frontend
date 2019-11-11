import axios from 'axios';
import config from '../config';
import coachListActionTypes from '../actionTypes/coachListActionTypes';

export function listAllCoach() {
    return async (dispatch) => {
        const response = await axios.get(`${config.api}/coaches`);
        dispatch({
            type: coachListActionTypes.FETCH_COACH_LIST,
            payload: response.data
        });
    }
}


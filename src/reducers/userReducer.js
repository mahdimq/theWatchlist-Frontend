import { REGISTER_USER, LOGIN_USER, LOGOUT_USER, UPDATE_USER } from './actionTypes';

const INITIAL_STATE = {
	username: null,
	firstname: null,
	lastname: null,
	email: null
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case REGISTER_USER:
			return { ...state, ...action.payload };

		case LOGIN_USER:
			return action.payload;

		case UPDATE_USER:
			return { ...state, ...action.payload };

		case LOGOUT_USER:
			return INITIAL_STATE;

		default:
			return state;
	}
};

export default userReducer;

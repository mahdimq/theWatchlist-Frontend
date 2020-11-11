import { REGISTER_USER, REMOVE_USER, LOGIN_USER, LOGOUT_USER, UPDATE_USER } from './actionTypes';
const INITIAL_STATE = {};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case REGISTER_USER:
			// localStorage.setItem('id', action.payload.id);
			return { ...state, ...action.payload };

		case LOGIN_USER:
			return action.payload;

		case UPDATE_USER:
			return { ...state, email: action.payload.email };

		case LOGOUT_USER:
			return INITIAL_STATE;

		case REMOVE_USER:
			// localStorage.removeItem('id');
			return {};

		default:
			return state;
	}
};

export default userReducer;

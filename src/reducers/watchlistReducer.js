import {
	ADD_WATCHLIST,
	LOAD_WATCHLIST,
	REMOVE_WATCHLIST,
	LOGOUT_USER
} from '../actions/actionTypes';

/* Reducer for lists */

const INITIAL_STATE = {};

const watchlistReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_WATCHLIST:
			return { ...action.payload };

		case REMOVE_WATCHLIST:
			return {};
		// case REMOVE_WATCHLIST:
		// 	return { ...state.filter((movie) => movie.id !== action.payload.id) };

		case LOAD_WATCHLIST:
			return { ...state, watchlist: action.payload };

		case LOGOUT_USER:
			return INITIAL_STATE;

		default:
			return state;
	}
};

export default watchlistReducer;

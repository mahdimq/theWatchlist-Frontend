import {
	ADD_WATCHLIST,
	LOAD_WATCHLIST,
	REMOVE_WATCHLIST,
	LOGOUT_USER
} from '../actions/actionTypes';

/* Reducer for lists */

const INITIAL_STATE = [];

function lists(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ADD_WATCHLIST:
			const newWatchlist = {
				id: action.payload.id,
				title: action.payload.title,
				description: action.payload.description,
				image: action.payload.image,
				rating: action.payload.rating
			};
			// return [...state, { ...action.payload }];
			return [...state, newWatchlist];

		case REMOVE_WATCHLIST:
			return [...state.filter((movie) => movie.id !== action.payload.id)];

		case LOAD_WATCHLIST:
			return action.payload;

		case LOGOUT_USER:
			return INITIAL_STATE;

		default:
			return state;
	}
}

export default lists;

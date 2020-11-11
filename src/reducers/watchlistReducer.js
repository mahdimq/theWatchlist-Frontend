import { ADD_WATCHLIST, REMOVE_WATCHLIST, GET_WATCHLIST } from './actionTypes';
const INITIAL_STATE = [];

const watchlistReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_WATCHLIST:
			return [...action.payload];

		case ADD_WATCHLIST:
			const newWatchlist = {
				id: action.payload.id,
				movie: action.payload.movie
			};
			return [...state, newWatchlist];

		case REMOVE_WATCHLIST:
			const idToRemove = action.id;
			const watchlistCopy = state.filter((watchlist) => watchlist.id !== idToRemove);
			return [...watchlistCopy];

		default:
			return state;
	}
};

export default watchlistReducer;

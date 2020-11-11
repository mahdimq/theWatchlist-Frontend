import { ADD_MOVIE, REMOVE_MOVIE } from './actionTypes';
const INITIAL_STATE = {};

const movieReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_MOVIE:
			return { ...action.payload };

		case REMOVE_MOVIE:
			return {};

		default:
			return state;
	}
};

export default movieReducer;

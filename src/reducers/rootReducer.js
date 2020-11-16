import movieReducer from './movieReducer';
import userReducer from './userReducer';
import watchlistReducer from './watchlistReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	users: userReducer,
	movies: movieReducer,
	watchlist: watchlistReducer
});

export default rootReducer;

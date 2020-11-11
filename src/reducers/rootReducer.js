import movieReducer from './movieReducer';
import userReducer from './userReducer';
import watchlistReducer from './watchlistReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	movie: movieReducer,
	user: userReducer,
	watchlist: watchlistReducer
});

export default rootReducer;

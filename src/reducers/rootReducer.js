import movieReducer from './movieReducer';
import userReducer from './userReducer';
import watchlistReducer from './watchlistReducer';
import alertsReducer from './alertsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	user: userReducer,
	movies: movieReducer,
	watchlist: watchlistReducer,
	alerts: alertsReducer
});

export default rootReducer;

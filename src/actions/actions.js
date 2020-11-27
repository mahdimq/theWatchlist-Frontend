import {
	LOGIN_USER,
	REGISTER_USER,
	LOGOUT_USER,
	UPDATE_USER,
	FETCH_USER,
	ADD_MOVIE,
	GET_MOVIE,
	REMOVE_MOVIE,
	ADD_WATCHLIST,
	REMOVE_WATCHLIST,
	LOAD_WATCHLIST,
	ADD_ALERT,
	REMOVE_ALERTS,
	GET_USER_INFO
} from './actionTypes';

import CapstoneApi from '../CapstoneApi';

// ########################################################
// ############### ALERTS STATE MANAGEMENT ################
// ########################################################
// DISPLAY ALERTS TO USER
export const addAlert = (message, type) => {
	return { type: ADD_ALERT, payload: { message, type } };
};

export const removeAlerts = () => {
	return { type: REMOVE_ALERTS };
};

// ########################################################
// ################ USER STATE MANAGEMENT #################
// ########################################################
// LOGIN USER
export const loginUser = (data) => {
	return async function (dispatch) {
		try {
			const user = await CapstoneApi.login(data);
			localStorage.setItem('user-token', user.token);
			await dispatch(userLoggedIn(user));
			await dispatch(addAlert(`Welcome back ${user.username}`));
		} catch (err) {
			console.log(err);
		}
	};
};

// user logged in
export const userLoggedIn = (user) => {
	return { type: LOGIN_USER, payload: user };
};

// =====================================================
// GET USER DATA
export const getUserData = (token, username, id) => {
	return { type: FETCH_USER, payload: { token, username, id } };
};

// =====================================================
// GET USER BIO
export const getUserInfo = (id) => {
	return async function (dispatch) {
		const user = await CapstoneApi.getUser(id);
		return dispatch(getUserBio(user));
	};
};

function getUserBio(user) {
	return { type: GET_USER_INFO, payload: user };
}

// =====================================================
// UPDATE USER
export const updateUser = (id, data) => {
	return async function (dispatch) {
		try {
			const user = await CapstoneApi.updateUser(id, data);
			dispatch(userUpdated(user));
			dispatch(addAlert(`User Information updated!`));
		} catch (err) {
			err.forEach((error) => dispatch(addAlert(error)));
			console.error(err);
		}
	};
};

// updated user
const userUpdated = (user) => {
	return { type: UPDATE_USER, payload: user };
};

// =====================================================
// REGISTER A NEW USER
export const registerUser = (data) => {
	return async function (dispatch) {
		try {
			const user = await CapstoneApi.register(data);
			localStorage.setItem('user-token', user.token);
			dispatch(userRegistered(user));
			dispatch(addAlert(`Registration Successfull! Welcome ${data.username}!`));
		} catch (err) {
			console.error(err);
		}
	};
};

// user registered
const userRegistered = (user) => {
	return { type: REGISTER_USER, payload: user };
};

// =====================================================
// DELETE USER
export const removeUser = (id, token) => {
	return async function (dispatch) {
		try {
			const message = await CapstoneApi.deleteUser(id, token);
			await dispatch(logoutUser());
			dispatch(addAlert(message));
		} catch (err) {
			err.forEach((error) => dispatch(addAlert(error)));
		}
	};
};

// =====================================================
// LOGOUT USER
export const logoutUser = () => {
	return { type: LOGOUT_USER };
};

// ########################################################
// ################ MOVIE STATE MANAGEMENT ################
// ########################################################
// ADD MOVIE TO DATABASE
const addMovie = (data) => {
	return async function (dispatch) {
		try {
			const res = await CapstoneApi.addMovie(data);
			dispatch(movieAdded(res));
		} catch (err) {
			console.error(err);
		}
	};
};

// movie added
const movieAdded = (movieData) => {
	return { type: ADD_MOVIE, payload: movieData };
};

// =====================================================

// RETRIEVE MOVIE FROM DATABASE
const getMovie = (id) => {
	return async function (dispatch) {
		const res = await CapstoneApi.getMovie(id);
		dispatch(gotMovie(res));
	};
};

// got movie
const gotMovie = (movieData) => {
	return { type: GET_MOVIE, payload: movieData };
};

// =====================================================
// GET ALL MOVIES FROM DATABASE (test)
export const getAllFilms = () => {
	return async function (dispatch) {
		const movies = await CapstoneApi.getAllMovies();
		dispatch(gotMovie(movies));
	};
};

// =====================================================

// REMOVE MOVIE FROM DATABASE
export const removeMovie = (id) => {
	return async function (dispatch) {
		const res = await CapstoneApi.deleteMovie(id);
		console.log('### REMOVE MOVIE ###', res);
		dispatch(movieRemoved());
	};
};

const movieRemoved = () => {
	return {
		type: REMOVE_MOVIE
	};
};

// =====================================================

// ########################################################
// ############# WATCHLIST STATE MANAGEMENT ###############
// ########################################################
// ADD MOVIE TO WATCHLIST
export const addToWatchlist = (user_id, movie_id) => {
	return async function (dispatch) {
		const res = await CapstoneApi.addWatchlist(user_id, movie_id);
		dispatch(addedWatchlist(res.data.movie));
	};
};

// added to watchlist
export const addedWatchlist = (movieData) => {
	return { type: ADD_WATCHLIST, payload: movieData };
};

// RETRIEVE FROM WATCHLIST
export const loadWatchlist = (user_id) => {
	return async function (dispatch) {
		const res = await CapstoneApi.getWatchlist(user_id);
		dispatch(gotWatchlist(res));
	};
};

const gotWatchlist = (watchlist) => {
	return {
		type: LOAD_WATCHLIST,
		payload: watchlist
	};
};

// REMOVE FROM WATCHLIST
export const removeWatchlist = (user_id, movie_id) => {
	return async function (dispatch) {
		await CapstoneApi.deleteWatchlist(user_id, movie_id);
		dispatch(removedWatchlist(movie_id));
	};
};

// removed from watchlist
const removedWatchlist = (movie_id) => {
	return { type: REMOVE_WATCHLIST, payload: movie_id };
};

export { addMovie, getMovie };

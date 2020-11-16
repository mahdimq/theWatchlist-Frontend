import {
	REGISTER_USER,
	LOGIN_USER,
	LOGOUT_USER,
	UPDATE_USER,
	ADD_MOVIE,
	REMOVE_MOVIE,
	ADD_WATCHLIST,
	REMOVE_WATCHLIST,
	GET_WATCHLIST
} from './actionTypes';

import CapstoneApi from '../CapstoneApi';

// ########################################################
// ################ USER STATE MANAGEMENT #################
// ########################################################
// LOGIN USER
const loginUser = (data) => {
	return async function (dispatch) {
		const user = await CapstoneApi.login(data);
		await dispatch(gotUser(user));
	};
};

// user logged in
const gotUser = (token) => {
	return { type: LOGIN_USER, payload: token };
};

// UPDATE USER
const updateUser = (id, data) => {
	return async function (dispatch) {
		try {
			const user = await CapstoneApi.updateUser(id, data);
			dispatch(userUpdated(user));
		} catch (err) {
			console.error(err);
		}
	};
};

// updated user
const userUpdated = (user) => {
	return { type: UPDATE_USER, payload: user };
};

// REGISTER A NEW USER
const registerUser = (data) => {
	return async function (dispatch) {
		const user = await CapstoneApi.register(data);
		dispatch(userRegistered(user));
	};
};

// user registered
const userRegistered = (user) => {
	return { type: REGISTER_USER, payload: user };
};

// DELETE USER
const deleteUser = (id, token) => {
	return async function (dispatch) {
		try {
			await CapstoneApi.deleteUser(id, token);
			await dispatch(logoutUser());
		} catch (err) {
			console.error(err);
		}
	};
};

// LOGOUT USER
const logoutUser = () => {
	return { type: LOGOUT_USER };
};

// GET USER INFO
const getUser = (token, id, email) => {
	return { type: LOGIN_USER, payload: { token, id, email } };
};

// ########################################################
// ################ MOVIE STATE MANAGEMENT ################
// ########################################################
// ADD MOVIE TO DATABASE
const addMovie = (data) => {
	return async function (dispatch) {
		try {
			const res = await CapstoneApi.addMovie(data);
			dispatch(movieAdded(res.data.movie));
		} catch (err) {
			console.error(err);
		}
	};
};

// movie added
const movieAdded = (movieData) => {
	return { type: ADD_MOVIE, payload: movieData };
};

// RETRIEVE MOVIE FROM DATABASE
const getMovie = (id) => {
	return async function (dispatch) {
		const res = await CapstoneApi.getMovie(id);
		dispatch(gotMovie(res.data.movie));
	};
};

// got movie
const gotMovie = (movieData) => {
	return { type: REMOVE_MOVIE, payload: movieData };
};

// REMOVE MOVIE FROM DATABASE
const removeMovie = () => {
	return {
		type: REMOVE_MOVIE
	};
};

// ########################################################
// ############# WATCHLIST STATE MANAGEMENT ###############
// ########################################################
// ADD MOVIE TO WATCHLIST
const addWatchlist = (user_id, movie_id) => {
	return async function (dispatch) {
		const res = await CapstoneApi.addWatchlist(user_id, movie_id);
		dispatch(addedWatchlist(res.data.movie));
	};
};

// added to watchlist
const addedWatchlist = (movieData) => {
	return { type: ADD_WATCHLIST, payload: movieData };
};

// RETRIEVE FROM WATCHLIST
const getWatchlist = (user_id) => {
	return async function (dispatch) {
		const res = await CapstoneApi.getWatchlist(user_id);
		dispatch(gotWatchlist(res.data.watchlist));
	};
};

const gotWatchlist = (watchlist) => {
	return {
		type: GET_WATCHLIST,
		payload: [...watchlist]
	};
};

// REMOVE FROM WATCHLIST
const removeWatchlist = (user_id, movie_id) => {
	return async function (dispatch) {
		await CapstoneApi.deleteWatchlist(user_id, movie_id);
		dispatch(removedWatchlist(movie_id));
	};
};

// removed from watchlist
const removedWatchlist = (movie_id) => {
	return { type: REMOVE_WATCHLIST, payload: movie_id };
};

export {
	loginUser,
	updateUser,
	registerUser,
	deleteUser,
	getUser,
	logoutUser,
	addMovie,
	getMovie,
	removeMovie,
	addWatchlist,
	getWatchlist,
	removeWatchlist
};

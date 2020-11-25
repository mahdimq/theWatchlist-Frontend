import { LOGIN_USER, REGISTER_USER, LOGOUT_USER, UPDATE_USER } from './types';
import CapstoneApi from '../CapstoneApi';
import { addAlert } from './actions';

/* Actions to handle user registration, login and logout */

function login(data) {
	return async function (dispatch) {
		const user = await CapstoneApi.login(data);
		await dispatch(userLoggedIn(user));
		await dispatch(addAlert(`Welcome ${data.username}!`, 'success'));
	};
}

function userLoggedIn(user) {
	return { type: LOGIN_USER, payload: user };
}

function register(data) {
	return async function (dispatch) {
		const user = await CapstoneApi.register(data);
		dispatch(userRegistered(user));
		dispatch(addAlert(`Welcome ${data.username}!`, 'success'));
	};
}

function updateUser(id, data) {
	return async function (dispatch) {
		try {
			const user = await CapstoneApi.updateUser(id, data);
			dispatch(userUpdated(user));
			dispatch(addAlert(`User info update!`, 'success'));
		} catch (err) {
			err.forEach((e) => {
				dispatch(addAlert(e, 'danger'));
			});
		}
	};
}

function deleteUser(id, token) {
	return async function (dispatch) {
		try {
			const message = await CapstoneApi.deleteUser(id, token);
			await dispatch(logout());
			dispatch(addAlert(message, 'success'));
		} catch (err) {
			err.forEach((e) => {
				dispatch(addAlert(e, 'danger'));
			});
		}
	};
}

function userUpdated(user) {
	return { type: UPDATE_USER, payload: user };
}

function userRegistered(user) {
	return { type: REGISTER_USER, payload: user };
}

function logout() {
	return { type: LOGOUT_USER };
}

function loadUser(token, username) {
	return { type: LOGIN_USER, payload: { token, username } };
}

export { login, register, logout, loadUser, updateUser, deleteUser };

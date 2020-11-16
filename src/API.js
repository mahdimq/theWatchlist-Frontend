import axios from 'axios';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3001';

class API {
	// static async request(endpoint, paramsOrData = {}, verb = 'get') {
	// 	paramsOrData._token = localStorage.getItem('capstone-token');

	// 	console.debug('API Call:', endpoint, paramsOrData, verb);

	// 	try {
	// 		return (
	// 			await axios({
	// 				method: verb,
	// 				url: `${BASE_URL}/${endpoint}`,
	// 				[verb === 'get' ? 'params' : 'data']: paramsOrData
	// 			})
	// 		).data;
	// 		// axios sends query string data via the "params" key,
	// 		// and request body data via the "data" key,
	// 		// so the key we need depends on the HTTP verb
	// 	} catch (err) {
	// 		console.error('API Error:', err.response);
	// 		let message = err.response.data.message;
	// 		throw Array.isArray(message) ? message : [message];
	// 	}
	// }
	// ########################################################
	// #################### USER ENDPOINTS ####################
	// ########################################################

	static async login(username, password) {
		// Data --> USERNAME & PASSWORD
		// const res = await axios.post(`${BASE_URL}/login`, data);
		// if (res.data._token) {
		// 	let username = data.username;
		// 	return { _token: res.data._token, username };
		// }
		const result = await axios.post(`${BASE_URL}/login`, { username, password });
		console.log(result);
		if (res.data._token) {
			return { _token: res.data._token, username };
		}
	}

	static async register(username, password, firstname, lastname, email) {
		// Data --> USER INFORMATION (firstname, lastname, email)
		// const res = await axios.post(`${BASE_URL}/users/signup`, data);
		// if (res.data._token) {
		// 	let username = data.username;
		// 	return { _token: res.data._token, username };
		// }
		const result = await axios.post(`${BASE_URL}/users/signup`, {
			username,
			password,
			firstname,
			lastname,
			email
		});
		console.log(result);
		if (result.data._token) {
			return { _token: res.data._token, username };
		}
	}

	static async getUser(id, token) {
		// Get the user
		const res = await axios.get(`${BASE_URL}/users/${id}`, {
			params: { _token: token }
		});
		return res.data.user;
	}

	// Set in localstorage
	static setLocalStorage(_token, username) {
		let user = { _token, username };
		localStorage.setItem('user', JSON.stringify(user));
	}

	// Logout User
	static logout() {
		localStorage.removeItem('user');
	}

	// static async updateUser(username, data) {
	// 	// Update user
	// 	const { firstname, lastname } = data;
	// 	const res = await axios.patch(`users/${username}`, {
	// 		params: { firstname, lastname }
	// 	});
	// 	return res;
	// }

	// static async deleteUser(id, token) {
	// 	const res = await this.request(`users/${id}`, { _token: token }, 'delete');
	// 	// return res.message;
	// 	return res;
	// }

	// static setLocalStorage(_token, username) {
	// 	// Save in LocalStorage
	// 	let user = { _token, username };
	// 	localStorage.setItem('user', JSON.stringify(user));
	// }

	// static logout() {
	// 	// Remove from LocalStorage
	// 	localStorage.removeItem('user');
	// }

	// // ########################################################
	// // ################### MOVIE ENDPOINTS ####################
	// // ########################################################

	// static async addMovie(data) {
	// 	let res = await this.request(`movies/add`, data, 'post');
	// 	console.log(res.movie);
	// 	return res.movie;
	// }

	// static async getMovie(id) {
	// 	let res = await this.request(`movies/${id}`);
	// 	return res.movie;
	// }

	// static async getAllMovies() {
	// 	let res = await this.request(`movies/`);
	// 	return res;
	// }

	// // ########################################################
	// // ################# WATCHLIST ENDPOINTS ##################
	// // ########################################################

	// static async addWatchlist(id, data) {
	// 	let res = await this.request(`watchlist/${id}/add`, data, 'post');
	// 	console.log(res.data);
	// 	return res.data;
	// }

	// static async getWatchlist(id) {
	// 	let res = await this.request(`watchlist/${id}`);
	// 	return res.data;
	// }

	// static async deleteWatchlist(user_id, movie_id) {
	// 	let res = await this.request(`watchlist/${user_id}/${movie_id}`, 'delete');
	// 	return res.message;
	// }

	// // ########################################################
	// // ##################### API ENDPOINTS ####################
	// // ########################################################

	// // static async getLatest() {
	// // 	const result = await this.request(`api/`, 'get');
	// // 	return result;
	// // }

	// // static async getTopRated() {
	// // 	const result = await this.request(`api/`);
	// // 	return result;
	// // }

	// static async getTrending() {
	// 	const result = await this.request(`api/trending`);
	// 	return result;
	// }

	// static async getPopular() {
	// 	const result = await this.request(`api/popular`);
	// 	return result;
	// }

	// static async getComedy() {
	// 	const result = await this.request(`api/comedy`);
	// 	return result;
	// }

	// static async getAction() {
	// 	const result = await this.request(`api/action`);
	// 	return result;
	// }
}

export default API;

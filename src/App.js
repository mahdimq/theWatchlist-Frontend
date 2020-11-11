import React, { useState, useEffect } from 'react';
// import { decode } from 'jsonwebtoken';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

// import CapstoneApi from './CapstoneApi';
// import UserContext from './UserContext';
import Header from './components/Header';
import Routes from './Routes';
import Footer from './components/Footer';
import { getUser } from './reducers/actions';

// Styled components
const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
`;

function App() {
	const [infoLoaded, setInfoLoaded] = useState(false);
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	// check if user is logged in, get token from local storage and save it to state
	useEffect(() => {
		async function checkUser() {
			const initialValue = localStorage.getItem('capstone-token') || null;

			if (user.token) {
				localStorage.setItem('capstone-token', user.token);
				localStorage.setItem('capstone-username', user.username);
				localStorage.setItem('capstone-email', user.email);
			} else if (initialValue) {
				const username = localStorage.getItem('capstone-username');
				const email = localStorage.getItem('capstone-email');
				await dispatch(getUser(initialValue, username, email));
			}
			setInfoLoaded(true);
		}
		checkUser();
	}, [user, dispatch]);

	if (!infoLoaded) return <h1>Loading...</h1>;
	// const initialValue = localStorage.getItem('capstone-token') || null;
	// const [token, setToken] = useState(initialValue);
	// const [user, setUser] = useState(null);

	// useEffect(() => {
	// 	async function getUser() {
	// 		try {
	// 			let { username } = decode(token);
	// 			let currentUser = await CapstoneApi.getUser(username);
	// 			// console.log('username', username);
	// 			// console.log('token', token);
	// 			console.log('Current user', currentUser);
	// 			setUser(currentUser);
	// 		} catch (err) {
	// 			setUser(null);
	// 		}
	// 	}

	// 	if (!token) {
	// 		localStorage.removeItem('capstone-token');
	// 	} else {
	// 		localStorage.setItem('capstone-token', token);
	// 	}

	// 	getUser();
	// }, [token]);

	// const logout = () => {
	// 	setUser(null);
	// 	setToken(null);
	// };

	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes />
				<Footer />
				<GlobalStyle />
			</BrowserRouter>
		</div>
	);
}

export default App;

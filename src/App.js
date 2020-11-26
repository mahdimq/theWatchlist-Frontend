import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { useDispatch } from 'react-redux';
import { decode } from 'jsonwebtoken';
import { getUserData } from './actions/actions';

import Alerts from './components/Alerts';
import Routes from './components/Routes';
import Header from './components/Header';
import Spinner from './components/Spinner';

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
	const dispatch = useDispatch();

	/*Check if user is logged in, load token from localstorage
    and save in state if available */
	useEffect(() => {
		async function checkUser() {
			const token = localStorage.getItem('user-token') || null;
			if (token) {
				const { username, id } = decode(token);
				await dispatch(getUserData(token, username, id));
			}
			setInfoLoaded(true);
		}
		checkUser();
	}, [dispatch]);

	if (!infoLoaded) {
		return <Spinner />;
	}

	return (
		<div>
			<Header />
			<Alerts />
			<Routes />
			<GlobalStyle />
		</div>
	);
}

export default App;

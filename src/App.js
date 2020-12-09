import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { decode } from 'jsonwebtoken';
import { getUserData } from './actions/actions';

// Import Components
import Alerts from './components/Alerts';
import Routes from './components/Routes';
import Header from './components/Header';
import Spinner from './components/Spinner';

// Styled components
import { GlobalStyle } from './styles/StyledComponents';

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

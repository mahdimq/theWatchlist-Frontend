import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navigation from './Navigation';
import Routes from './Routes';
import { getUser } from '../reducers/actions';
import { decode } from 'jsonwebtoken';

function App() {
	const [infoLoaded, setInfoLoaded] = useState(false);
	const user = useSelector((state) => state.users);
	const dispatch = useDispatch();
	console.log('######### APP COMP USER: ', user);
	/*Check if user is logged in, load token from localstorage
    and save in state if available */
	useEffect(() => {
		async function checkUser() {
			const initialValue = localStorage.getItem('capstone-token') || null;
			if (user) {
				console.log('USER TOKEN IN USEEFFECT: ', user);

				localStorage.setItem('capstone-token', user);
			} else if (initialValue) {
				const userToken = localStorage.getItem('capstone-token');

				await dispatch(getUser(initialValue, userToken));
			}
			setInfoLoaded(true);
		}
		checkUser();
	}, [user, dispatch]);

	if (!infoLoaded) {
		return <h3>Loading...</h3>;
	}
	return (
		<div>
			<h1>APP COMPONENT (top level)</h1>
			<Navigation />
			<Routes />
		</div>
	);
}

export default App;

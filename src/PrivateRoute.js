import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from './UserContext';

// function PrivateRoute({ exact, path, children }) {
// 	const { user } = useContext(UserContext);
// 	console.log('USER CONTEXT: ', user);

// 	if (!user) {
// 		return <Redirect to='/login' />;
// 	}

// 	return (
// 		<Route exact={exact} path={path}>
// 			{children}
// 		</Route>
// 	);
// }

import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import userContext from './userContext';

function PrivateRoute(props) {
	const ACTIVE_USER = useContext(userContext);
	const { current_user } = ACTIVE_USER;
	return (
		<Route exact to={props.path}>
			{current_user ? props.children : <Redirect to='/login' />}
		</Route>
	);
}
export default PrivateRoute;

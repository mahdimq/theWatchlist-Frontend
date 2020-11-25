// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { addAlert, logoutUser } from '../actions/actions';

// function Navigation() {
// 	const user = useSelector((state) => state.user);
// 	const dispatch = useDispatch();

// 	const logout = async () => {
// 		await dispatch(logoutUser());
// 		localStorage.removeItem('user-token');
// 		dispatch(addAlert('You have successfully logged out'));
// 	};

// 	// console.log('### USER IN NAV ###', user);

// 	return (
// 		<nav>
// 			<Link to='/'>
// 				<p>
// 					Capstone Logo{' '}
// 					{user.token ? <span style={{ float: 'right' }}>Welcome {user.username}</span> : null}
// 				</p>
// 			</Link>

// 			{user.token ? (
// 				<ul>
// 					<li>
// 						<Link to='/movies'>Movies</Link>
// 					</li>
// 					<li>
// 						<Link to='/watchlist'>Watchlist</Link>
// 					</li>
// 					<li>
// 						<Link to='/account'>Account</Link>
// 					</li>
// 					<li>
// 						<Link to='/' onClick={logout}>
// 							Logout
// 						</Link>
// 					</li>
// 				</ul>
// 			) : (
// 				<ul>
// 					<li>
// 						<Link to='/login'>Log In</Link>
// 					</li>
// 					<li>
// 						<Link to='/signup'>Sign Up</Link>
// 					</li>
// 				</ul>
// 			)}
// 		</nav>
// 	);
// }

// export default Navigation;

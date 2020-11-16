import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navigation() {
	const userToken = useSelector((state) => state.users);

	console.log('###### INFO TOKEN IN NAVBAR: ', userToken);

	return (
		<div>
			<NavLink to='/'>DB Logo - Nav Component</NavLink>
			{userToken ? (
				<ul>
					<li>
						<NavLink to='/users/'>Users</NavLink>
					</li>
					<li>
						<NavLink to='/movies'>Movies</NavLink>
					</li>
				</ul>
			) : (
				<ul>
					<li>
						<NavLink to='/login'>Login</NavLink>
					</li>
				</ul>
			)}
		</div>
	);
}

export default Navigation;

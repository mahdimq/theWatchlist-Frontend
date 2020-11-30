import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader } from '../styles/StyledComponents';
import { useSelector, useDispatch } from 'react-redux';
import { addAlert, logoutUser } from '../actions/actions';

// Import logos here "Using temporary youtube logo"<--
// import logo from '../images/ylogo.png';

function Header() {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const logout = async () => {
		await dispatch(logoutUser());
		localStorage.removeItem('user-token');
		dispatch(addAlert('You have successfully logged out'));
	};

	return (
		<StyledHeader>
			<nav className='header-content'>
				<Link to='/'>
					<h4>HOME</h4>
					{/* <StyledLogo src={logo} alt='youtube' /> */}
				</Link>
				<p>
					{user.token ? (
						<span style={{ float: 'right', color: 'white' }}>Welcome {user.username}</span>
					) : null}
				</p>

				{user.token ? (
					<ul style={{ display: 'flex' }}>
						{/* <Link to='/movies'>
							<li style={{ marginLeft: '0.5em', listStyle: 'none' }}>Movies</li>
						</Link> */}

						<Link to='/watchlist'>
							<li style={{ marginLeft: '0.5em', listStyle: 'none' }}>Watchlist</li>
						</Link>

						<Link to='/profile'>
							<li style={{ marginLeft: '0.5em', listStyle: 'none' }}>Profile</li>
						</Link>

						<Link to='/' onClick={logout}>
							<li style={{ marginLeft: '0.5em', listStyle: 'none' }}>Logout</li>
						</Link>
					</ul>
				) : (
					<ul style={{ display: 'flex' }}>
						<Link to='/login'>
							<li style={{ marginLeft: '0.5em', listStyle: 'none' }}>Log In</li>
						</Link>

						<Link to='/signup'>
							<li style={{ marginLeft: '0.5em', listStyle: 'none' }}>Sign Up</li>
						</Link>
					</ul>
				)}
			</nav>
		</StyledHeader>
	);
}

export default Header;

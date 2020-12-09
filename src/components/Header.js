import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader, StyledTMDBLogo } from '../styles/StyledComponents';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../actions/actions';

// Import logos
import TMDBLogo from '../images/tmdb_logo.svg';

function Header() {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const logout = async () => {
		await dispatch(logoutUser());
		localStorage.removeItem('user-token');
	};

	return (
		<StyledHeader>
			<nav className='header-content'>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center'
					}}>
					<Link to='/'>
						<h4>theWATCHlist</h4>
						{/* <StyledLogo src={logo} alt='youtube' /> */}
					</Link>

					{user.token ? (
						<ul style={{ display: 'flex' }}>
							{/* <Link to='/movies'>
							<li style={{ marginLeft: '0.5em', listStyle: 'none' }}>Movies</li>
						</Link> */}
							{user.token ? (
								<li style={{ marginLeft: '0.5em', listStyle: 'none', color: 'white' }}>
									{' '}
									Welcome {user.username}
								</li>
							) : null}
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
					<StyledTMDBLogo src={TMDBLogo} alt='tmdb-logo' />
				</div>
			</nav>
		</StyledHeader>
	);
}

export default Header;

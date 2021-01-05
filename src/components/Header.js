import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../actions/actions';

// Import logos
import TMDBLogo from '../images/tmdb_logo.svg';
import theWatchlist from '../images/theWatchlist.png';
import {
	StyledNavbar,
	StyledTMDBLogo,
	StyledLogo,
	StyledHeader
} from '../styles/StyledHeader';

function Header() {
	const navLinks = useRef(null);
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const toggleNavbar = () => {
		navLinks.current.classList.toggle('nav--visible');
	};

	const logout = async () => {
		await dispatch(logoutUser());
		localStorage.removeItem('user-token');
	};

	return (
		<StyledHeader>
			<StyledNavbar>
				<nav className='container logo-container row '>
					<button
						onClick={toggleNavbar}
						className='nav-toggle'
						aria-label='open navigation'>
						<span className='hamburger'></span>
					</button>

					<div className='logo'>
						<Link to='/'>
							<StyledLogo src={theWatchlist} alt='watchlist-logo' />
						</Link>
					</div>

					<div ref={navLinks} className='nav'>
						{user.token ? (
							<ul className='nav__list '>
								{user.token ? (
									<li className='nav__item'>Welcome {user.username}</li>
								) : null}

								<Link to='/watchlist'>
									<li className='nav__item'>Watchlist</li>
								</Link>

								<Link to='/profile'>
									<li className='nav__item'>Profile</li>
								</Link>

								<Link to='/'>
									<li onClick={logout} className='nav__item'>
										Logout
									</li>
								</Link>
							</ul>
						) : (
							<ul className='nav__list '>
								<Link to='/login'>
									<li className='nav__item'>Log In</li>
								</Link>

								<Link to='/signup'>
									<li className='nav__item'>Sign Up</li>
								</Link>
							</ul>
						)}
					</div>
					<div className='tmdb-logo'>
						<StyledTMDBLogo src={TMDBLogo} alt='tmdb-logo' />
					</div>
				</nav>
			</StyledNavbar>
		</StyledHeader>
	);
}

export default Header;

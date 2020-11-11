import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

// Import logos here "Using temporary youtube logo"<--
import logo from '../images/ylogo.png';
import { logoutUser } from '../reducers/actions';

const StyledHeader = styled.div`
	background-color: #1c1c1c;
	padding: 0 1.5em;
	box-sizing: border-box;

	.header-content {
		max-width: 1280px;
		min-height: 120px;
		padding: 1.5em 0;
		margin: 0 auto;
		box-sizing: border-box;

		@media screen and (max-width: 500px) {
			max-width: 1280px;
			min-height: 0px;
		}
	}
`;

const StyledLogo = styled.img`
	width: 50px;
	margin-top: 10px;
	border-radius: 3px;

	@media screen and (max-width: 500px) {
		width: 30px;
		margin-top: 5px;
	}
`;

function Header() {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	console.log('THIS IS THE USER', user);

	const handleLogout = () => {
		dispatch(logoutUser());
	};

	return (
		<StyledHeader>
			<nav>
				<Link exact to='/' className='header-content'>
					<StyledLogo src={logo} alt='youtube' />
				</Link>
				{user.token ? (
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>

						<li>
							<Link to='/movies'>Movies</Link>
						</li>

						<li>
							<Link to='/profile'>Profile</Link>
						</li>

						<li>
							<Link to='/' onClick={handleLogout}>
								Logout
							</Link>
						</li>
					</ul>
				) : (
					<ul>
						<li>
							<Link style={{ color: 'white' }} to='/login'>
								Login
							</Link>
						</li>
					</ul>
				)}
			</nav>
		</StyledHeader>
	);
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Import logos here "Using temporary youtube logo"<--
import logo from '../images/ylogo.png';

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
	return (
		<StyledHeader>
			<nav className='header-content'>
				<Link to='/'>
					<StyledLogo src={logo} alt='youtube' />
				</Link>

				{/* <ul>
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
						<Link to='/'>Logout</Link>
					</li>
				</ul> */}
				{/* ================ USER NOT AUTH ============= */}
				{/* <ul>
					<li>
						<Link style={{ color: 'white' }} to='/login'>
							Login
						</Link>
					</li>
				</ul> */}
			</nav>
		</StyledHeader>
	);
}

export default Header;

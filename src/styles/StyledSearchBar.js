import styled from 'styled-components';

export const StyledSearchBar = styled.div`
	width: 100%;
	background: #1c1c1c;
	padding: 1em;
	box-sizing: border-box;
	color: #fff;
`;

export const StyledSearchBarContent = styled.div`
	max-width: 1280px;
	width: 100%;
	height: 40px;
	background: #353535;
	margin: 0 auto;
	border-radius: 40px;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;

	.search {
		color: #fff;
		margin: 0 3px 0 10px;
		font-size: 1.5em;
	}

	input {
		font-family: 'Abel', sans-serif;
		font-size: 28px;
		margin-left: 8px;
		border: none;
		width: 90%;
		background: transparent;
		height: 40px;
		color: #fff;
		box-sizing: border-box;

		:focus {
			outline: none;
		}

		@media screen and (max-width: 720px) {
			font-size: 28px;
		}
	}
`;

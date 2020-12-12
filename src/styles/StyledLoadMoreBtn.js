import styled from 'styled-components';

export const StyledLoadMoreBtn = styled.button`
	box-sizing: inherit;
	transition: all 0.6s ease;
	background: #c20a0a;
	width: 25%;
	min-width: 10rem;
	max-width: 1280px;
	height: 2em;
	color: #fff;
	cursor: pointer;
	border-radius: 10px;
	border: none;
	font-family: 'Abel', sans-serif;
	font-size: 1.5em;
	display: block;
	margin: 1.5rem auto;
	padding: 0 1.25em;
	outline: none;

	:hover {
		opacity: 0.8;
		color: #000;
	}
`;

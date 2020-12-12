import styled from 'styled-components';

export const StyledActor = styled.div`
	font-family: 'Abel', sans-serif;
	color: #fff;
	background: #1c1c1c;
	border-radius: 5px;
	padding: 2px;
	text-align: center;

	img {
		display: block;
		width: 100%;
		height: 200px;
		object-fit: cover;
		border-radius: 5px;
	}

	.actor-name {
		display: block;
		font-size: 1.1em;
		font-style: italic;
	}

	.actor-character {
		display: block;
		font-size: 1em;
		color: tomato;
	}
`;

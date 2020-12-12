import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		background-color: #000;
		color: #fff;
		font-family: "Roborto", sans-serif;
	}

	a {
		color: lightslategray;
	}
`;

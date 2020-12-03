import styled from 'styled-components';

export const StyledFormComp = styled.div`
	max-width: 480px;
	margin: 1.5em auto;
	padding: 1.5em;

	.input-box {
		color: black;
		font-family: Helvetica, Arial, sans-serif;
		font-weight: 500;
		font-size: 18px;
		border-radius: 5px;
		line-height: 22px;
		background-color: transparent;
		border: 1px solid #cc6666;
		transition: all 0.3s;
		padding: 13px;
		margin-top: 15px;
		width: 100%;
		box-sizing: border-box;
		outline: 0;
		color: lightslategray;
	}
	.input-box:focus {
		border: 1px solid #cc4949;
	}
`;

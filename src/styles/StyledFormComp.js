import styled from 'styled-components';

export const StyledFormComp = styled.div`
	max-width: 420px;
	margin: 50px auto;

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

	.form-btn {
		font-family: 'Montserrat', Arial, Helvetica, sans-serif;
		width: 100%;
		background: #cc6666;
		border-radius: 5px;
		border: 0;
		cursor: pointer;
		color: white;
		font-size: 24px;
		padding-top: 10px;
		padding-bottom: 10px;
		transition: all 0.3s;
		margin-top: 20px;
		font-weight: 700;
	}
	.form-btn:hover {
		background: #cc4949;
	}

	.cancel:hover {
		background-color: blue;
	}

	.delete:hover {
		background-color: tomato;
	}

	.logout:hover {
		background-color: lightGreen;
	}
`;

// export const StyledFormButton = styled.button`
// 	border-radius: 5px;
// 	border: 0;
// 	cursor: pointer;
// 	color: white;
// 	font-size: 24px;
// 	padding-top: 10px;
// 	padding-bottom: 10px;
// 	transition: all 0.3s;
// 	background-color: slateGray;
// 	margin: 10px 5px 10px 5px;
// `;

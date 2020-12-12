import styled from 'styled-components';
import { IMAGE_URL, backdrop_size } from '../helpers/config';

export const StyledMovieInfo = styled.div`
	background: ${(props) =>
		props.backdrop ? `url('${IMAGE_URL}/${backdrop_size}/${props.backdrop}')` : '#000'};
	background-size: cover !important;
	background-position: center !important;
	width: 100%;
	padding: 40px 20px;
	box-sizing: border-box;
	animation: animateMovieInfo 1s;

	.movieinfo-content {
		max-width: 1280px;
		min-height: 450px;
		margin: 0 auto;
		background: rgb(0, 0, 0, 0.7);
		border-radius: 20px;
		position: relative;
	}

	.movieinfo-tile {
		width: 300px;
		float: left;

		@media screen and (max-width: 768px) {
			width: 100% !important;
		}
	}

	.movieinfo-text {
		font-family: Arial, Helvetica, sans-serif;
		padding: 40px;
		font-size: 1.1em;
		color: #fff;
		overflow: hidden;


		h1 {
			font-family: 'Abel', sans-serif;
			margin: 0;

			@media screen and (max-width: 1000px) {
				font-size: 32px !important;
			}
		}

		h3 {
      display: flex;
      flex-wrap: no-wrap;
			font-size: 1.1em;
			margin: 0.75em auto 0.5em;
			font-family: "Abel";
			font-weight: bold;

			@media screen and (min-width: 1000px) {
				font-size: 1.3em !important;
			}
		}

		p {
			font-family: 'Abel', sans-serif;
			font-size: 1em;
			line-height: 1.5em;
		}

		.director-name {
			margin: 0 auto 0.3em;
			line-height: 1.2;
		}
	}

	.rating-director {
		display: flex;
		justify-content: flex-start;
	}

	.score {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 35px;
		height: 35px;
		background: #fff;
		color: #000;
		font-weight: 800;
		border-radius: 50px;
		margin: 0 0 0 0;
	}

	.director,
	.button-group{
		margin: 0 0 0 40px;
	}

	.buttons {
		display: flex;
		justify-content: flex-start;
		align-items: center;

	}

	.icon {
		border-radius: 50%;
		padding: 8px;
		cursor: pointer;
		background-color: #fff;
		font-size: 1em;
		width: 18px;
		height: 18px;
	}

	.icon + .icon {
		margin-left: 8px;
	}

	@media screen and (max-width: 768px) {
		min-height: 600px;
		height: auto;

		.rating-director {
			flex-direction: column;
			justfify-content: flex-start;
			align-items: flex-start;
		}

	.director,
	.button-group {
		margin: 0;
	}


	@keyframes animateMovieinfo {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

import styled from 'styled-components';
import Modal, { BaseModalBackground } from 'styled-react-modal';

const IMAGE_URL = 'http://image.tmdb.org/t/p';
const backdrop_size = 'w1280';
// const poster_size = 'w500';

export const StyledModal = Modal.styled`
  width: 100%;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => props.opacity};
  transition: opacity ease 500ms;
`;

export const FadingBackground = styled(BaseModalBackground)`
	// opacity: ${(props) => props.opacity};
	transition: opacity ease 200ms;
`;

export const StyledHeader = styled.div`
	background-color: #1c1c1c;
	box-sizing: border-box;

	.header-content {
		max-width: 1280px;
		width: 90%;
		padding: 1em 0;
		margin: 0 auto;
		box-sizing: border-box;

		@media screen and (max-width: 500px) {
			max-width: 1280px;
			min-height: 0px;
		}
	}
`;

export const StyledNavigation = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 70px;
	background: #353535;
	color: #fff;

	.navigation-content {
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 20px;
		width: 100%;

		p {
			font-family: 'Abel', sans-serif;
			font-size: 22px;
			float: left;
			color: #fff;
			padding-right: 10px;
			text-decoration: none;

			@media screen and (max-width: 768px) {
				font-size: 16px;
			}
		}
	}
`;

export const StyledLogo = styled.img`
	width: 50px;
	margin-top: 10px;
	border-radius: 3px;

	@media screen and (max-width: 500px) {
		width: 30px;
		margin-top: 5px;
	}
`;

export const StyledHero = styled.div`
background:
	linear-gradient(
    to bottom,
      rgba(0, 0, 0, 0.1) 39%,
      rgba(0, 0, 0, 0.2) 41%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url(${(props) => props.image}), #1c1c1c;

	background-size: 100%, cover;
	background-position: center, center;
	width: 100%;
	height: 600px;
	position: relative;
	animation: animateImage 1s;

	.heroimage-content {
		max-width: 1280px;
		padding: 1.5em;
		margin: 0 auto;
  }

  .heroimage-text {
    z-index: 100;
    max-width: 700px;
    position: absolute;
    bottom: 40px;
    margin-right: 1.5em;
    min-height: 100px;
    color: #fff;

    h1 {
      font-family: sans-serif;
      font-size: 3em;
      color: #fff;

      @media screen and (max-width: 720px) {
        font-size: 38px;
        color: #fff;
      }
    }

    p {
      font-family: 'Roboto', sans-serif;;
      font-size: 22px;
      line-height: 26px;
      color: #fff;

      @media screen and (max-width: 720px) {
        font-sizeL 1em;
        line-height: 20px;
        color: #fff;
      }
    }

    @media screen and (max-width: 720px) {
      max-width: 100$
    }
  }

  @keyframes animateImage {
    from {
      opacity: 0
    }
    to {
      opacity: 1
    }
  }
`;

export const StyledGrid = styled.div`
	max-width: 1280px;
	margin: 0 auto;
	padding: 0 20px;
	h1 {
		font-family: 'Abel', sans-serif;
		font-size: 42px;

		@media screen and (max-width: 768px) {
			font-size: 22px;
		}
	}
`;

export const StyledGridContent = styled.div`
	display: grid;
	grid-template-columns: repeat(5, minmax(100px, 1fr));
	grid-gap: 40px;
	position: relative;

	@media screen and (max-width: 1024px) {
		grid-template-columns: repeat(4, minmax(100px, 1fr));
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(3, minmax(100px, 1fr));
	}

	@media screen and (max-width: 600px) {
		grid-template-columns: repeat(2, minmax(100px, 1fr));
	}

	@media screen and (max-width: 375px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const StyledMovieTile = styled.div`
	img {
		width: 100%;
		/* min-height: 340px; */
		transition: all 0.3s;
		object-fit: cover;
		border-radius: 20px;
		animation: animateMovieTile 0.5s;

		:hover {
			opacity: 0.8;
		}

		.clickable {
			cursor: pointer;
		}

		@keyframes animateMovieTile {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}
	}
`;

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
      flex-wrap: wrap;
			font-size: 1em;
			margin: 0.75em auto 0.5em;
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

export const StyledMovieInfoBar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 100px;
	height: auto;
	background: #1c1c1c;
	padding: 20px;
	box-sizing: border-box;
	font-family: 'Abel', sans-serif;
	font-size: 20px;

	.movieinfobar-content {
		max-width: 1280px;
		width: 100%;
		margin: 0 auto;
		color: #fff;
	}

	.movieinfobar-content-col {
		float: left;
		width: 33.33%;
		box-sizing: border-box;
		padding: 10px 20px 0 0;
	}

	.movieinfobar-info {
		padding: 5px 0 0 10px;
		float: left;
	}

	.fa-time {
		float: left;
		margin-top: -4px;
	}

	@media screen and (max-width: 768px) {
		.fa-time {
			display: none;
		}
	}

	@media screen and (max-width: 425px) {
		font-size: 14px;
	}
`;

export const StyledLoadMoreBtn = styled.button`
	background: #000;
	width: 25%;
	min-width: 200px;
	height: 70px;
	color: #fff;
	cursor: pointer;
	transition: all 0.3s;
	border-radius: 40px;
	font-family: 'Abel', sans-serif;
	font-size: 28px;
	max-width: 1280px;
	display: block;
	margin: 20px auto;
	padding: 0 20px;
	outline: none;

	:hover {
		opacity: 0.8;
	}
`;

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

export const StyledSpinner = styled.div`
	border: 3px solid #f3f3f3;
	border-top: 3px solid red;
	border-bottom: 3px solid red;

	border-radius: 50%;
	width: 70px;
	height: 70px;
	animation: spin 0.8s infinite linear;
	margin: 4em auto;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

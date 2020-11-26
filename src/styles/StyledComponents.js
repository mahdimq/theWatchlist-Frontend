import styled from 'styled-components';
const IMAGE_URL = 'http://image.tmdb.org/t/p';
const backdrop_size = 'w1280';
// const poster_size = 'w500';

export const StyledHeader = styled.div`
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
      font-family: san-serif;
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
		color: #fff;
		overflow: hidden;

		h1 {
			font-family: 'Abel', sans-serif;
			font-size: 48px;
			margin: 0;

			@media screen and (max-width: 1000px) {
				font-size: 32px !important;
			}
		}

		h3 {
			font-size: 16px;
			line-height: 0;
			margin-top: 30px;
		}

		p {
			font-family: 'Abel', sans-serif;
			font-size: 18px;
			line-height: 26px;
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
		border-radius: 25px;
		margin: 0px 0 0 0;
	}

	.director,
	.watchlist {
		margin: 0 0 0 40px;

		p {
			margin: 0;
		}
		button + button {
			margin: 0 15px 0;
		}
	}

	@media screen and (max-width: 768px) {
		min-height: 600px;
		height: auto;
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

	.fa-time,
	.fa-revenue {
		float: left;
		margin-top: -4px;
	}

	.fa-budget {
		float: left;
		margin-top: -3px;
	}

	@media screen and (max-width: 768px) {
		.fa-time,
		.fa-revenue,
		.fa-budget {
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
	height: 80px;
	background: #1c1c1c;
	padding: 11px 10px 0px 10px;
	box-sizing: border-box;
	color: #fff;
`;

export const StyledSearchBarContent = styled.div`
	max-width: 1280px;
	width: 100%;
	height: 55px;
	background: #353535;
	margin: 0 auto;
	border-radius: 40px;
	position: relative;
	color: #fff;

	.fa-search {
		position: absolute;

		color: #fff;
		z-index: 100;
	}

	input {
		font-family: 'Abel', sans-serif;
		font-size: 28px;
		position: absolute;
		left: 0px;
		margin: 8px 0;
		padding: 0 0 0 60px;
		border: 0;
		width: 95%;
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

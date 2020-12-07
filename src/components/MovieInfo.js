import React, { useState } from 'react';
import MovieTile from '../components/MovieTile';
import { StyledMovieInfo } from '../styles/StyledComponents';
import NoPoster from '../images/no_poster.jpg';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addMovie, addAlert, addToWatchlist, removeWatchlist } from '../actions/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faPlay } from '@fortawesome/free-solid-svg-icons';
import CapstoneApi from '../CapstoneApi';

import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

import styled from 'styled-components';
import Modal, { ModalProvider, BaseModalBackground } from 'styled-react-modal';

const IMAGE_URL = 'http://image.tmdb.org/t/p';
const poster_size = 'w500';

const opts = {
	height: '390',
	width: '640',
	playerVars: {
		autoplay: 1
	}
};

const StyledModal = Modal.styled`
  width: 90%;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => props.opacity};
  transition: opacity ease 500ms;
`;

const FadingBackground = styled(BaseModalBackground)`
	opacity: ${(props) => props.opacity};
	transition: opacity ease 200ms;
`;

function MovieInfo({ movie }) {
	const history = useHistory();
	const { movieId } = useParams();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);

	const [trailerUrl, setTrailerUrl] = useState('');

	const [isOpen, setIsOpen] = useState(false);
	const [opacity, setOpacity] = useState(0);

	function toggleModal(e) {
		setIsOpen(!isOpen);
	}

	function afterOpen() {
		setTimeout(() => {
			setOpacity(1);
		}, 10);
	}

	function beforeClose() {
		return new Promise((resolve) => {
			setOpacity(0);
			setTimeout(resolve, 200);
		});
	}

	// Check for movie in the DB first before pulling from API
	const checkDbFirst = async (id) => {
		let result = await CapstoneApi.getMovie(id);
		if (!result) {
			result = await CapstoneApi.getById(id);
		}
		return result;
	};

	const handleAddMovie = async () => {
		const checkDB = await checkDbFirst(movieId);
		const movieInfo = { ...checkDB, _token: user.token };

		await dispatch(addMovie(movieInfo));
		await dispatch(addToWatchlist(user.id, movieInfo));
		dispatch(addAlert('Movie added to watchlist'));
		history.push('/watchlist');
	};

	const handleRemoveMovie = async () => {
		// const res = await CapstoneApi.deleteMovie(movieId, user.token);
		// if (res.message) {
		// 	dispatch(addAlert(res.message));
		// }
		// history.push('/movies');

		await dispatch(removeWatchlist(user.id, movieId));
		dispatch(addAlert('MOVIE REMOVED FROM WATCHLIST'));
		history.push('/watchlist');
	};

	const handleTrailer = () => {
		movieTrailer(movie.original_title || '')
			.then((url) => {
				const urlParams = new URLSearchParams(new URL(url).search);
				setTrailerUrl(urlParams.get('v'));
			})
			.catch((err) => console.error(err));
	};

	return (
		<ModalProvider backgroundComponent={FadingBackground}>
			<StyledMovieInfo backdrop={movie.backdrop_path}>
				<div className='movieinfo-content'>
					<div className='movieinfo-tile'>
						<MovieTile
							image={
								movie.poster_path ? `${IMAGE_URL}/${poster_size}/${movie.poster_path}` : NoPoster
							}
							clickable={false}
						/>
					</div>

					<div className='movieinfo-text'>
						<h1>{movie.title}</h1>
						<h3>
							<em>{movie.tagline}</em>
						</h3>
						<p>{movie.overview}</p>
						<p>
							Genres:{' '}
							{movie.genres.map((g) => (
								<small style={{ color: 'tomato' }} key={g.id}>
									{' '}
									{g.name} |{' '}
								</small>
							))}
						</p>

						<div className='rating-director'>
							<div>
								<h3>IMDB RATING</h3>
								<div className='score'>{movie.vote_average}</div>
							</div>

							<div className='director'>
								<h3>DIRECTOR{movie.directors.length > 1 ? "'s" : ''}</h3>
								{movie.directors.map((person) => (
									<p className='director-name' key={person.credit_id}>
										{person.name}
									</p>
								))}
							</div>

							<div className='button-group'>
								<h3>ADD TO WATCHLIST</h3>

								<div className='buttons'>
									<FontAwesomeIcon
										className='icon'
										style={{ color: 'skyBlue' }}
										icon={faPlus}
										onClick={handleAddMovie}
									/>
									<FontAwesomeIcon
										className='icon'
										style={{ color: 'tomato' }}
										icon={faMinus}
										onClick={handleRemoveMovie}
									/>
								</div>
							</div>

							<div className='button-group'>
								<h3>TRAILER</h3>

								<FontAwesomeIcon
									className='icon'
									style={{ color: 'green' }}
									icon={faPlay}
									onClick={handleTrailer}
								/>
							</div>
						</div>
					</div>
				</div>

				{/* <StyledModal
					isOpen={isOpen}
					afterOpen={afterOpen}
					beforeClose={beforeClose}
					onBackgroundClick={toggleModal}
					onEscapeKeydown={toggleModal}
					opacity={opacity}
					backgroundProps={{ opacity }}>
					{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
				</StyledModal> */}
			</StyledMovieInfo>
		</ModalProvider>
	);
}

export default MovieInfo;

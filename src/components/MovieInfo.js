import React, { useState, useEffect } from 'react';
import MovieTile from '../components/MovieTile';
import NoPoster from '../images/no_poster.jpg';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addMovie, addToWatchlist, removeWatchlist } from '../actions/actions';
import { IMAGE_URL, poster_size } from '../helpers/config';
import CapstoneApi from '../CapstoneApi';

// Trailer Imports
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

// Style Imports
import { StyledMovieInfo } from '../styles/StyledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faPlay } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const opts = {
	height: '390',
	width: '100%',
	playerVars: {
		autoplay: 1
	}
};

const useStyles = makeStyles(() => ({
	root: { width: '90%', margin: '100px auto' }
}));

function MovieInfo({ movie }) {
	const history = useHistory();
	const { movieId } = useParams();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);

	const [trailerUrl, setTrailerUrl] = useState('');

	// ====== Material UI Styles ====== //
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	// ================================ //

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
		history.push('/watchlist');
	};

	const handleRemoveMovie = async () => {
		await dispatch(removeWatchlist(user.id, movieId));
		history.push('/watchlist');
	};

	const handleTrailer = () => {
		handleOpen();
	};

	useEffect(() => {
		movieTrailer(movie.title || '')
			.then((url) => {
				const urlParams = new URLSearchParams(new URL(url).search);
				setTrailerUrl(urlParams.get('v'));
			})
			.catch((err) => console.error(err));
	}, [movie.title]);

	return (
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
							<span style={{ color: 'orange' }} key={g.id}>
								{' '}
								{g.name} |{' '}
							</span>
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
								<button style={{ background: 'none', border: 'none' }}>
									<FontAwesomeIcon
										className='icon'
										style={{ color: 'skyBlue' }}
										icon={faPlus}
										onClick={handleAddMovie}
									/>
								</button>
								<button style={{ background: 'none', border: 'none' }}>
									<FontAwesomeIcon
										className='icon'
										style={{ color: 'tomato' }}
										icon={faMinus}
										onClick={handleRemoveMovie}
									/>
								</button>
							</div>
						</div>

						{trailerUrl ? (
							<div className='button-group'>
								<h3>TRAILER</h3>
								<button style={{ background: 'none', border: 'none' }}>
									<FontAwesomeIcon
										className='icon'
										style={{ color: 'green' }}
										icon={faPlay}
										onClick={handleTrailer}
									/>
								</button>
							</div>
						) : null}
					</div>
					<Modal
						open={open}
						className={classes.root}
						onClose={handleClose}
						closeAfterTransition
						tabIndex={-1}
						BackdropComponent={Backdrop}
						BackdropProps={{
							timeout: 400
						}}>
						<Fade in={open}>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}</Fade>
					</Modal>
				</div>
			</div>
		</StyledMovieInfo>
	);
}

export default MovieInfo;

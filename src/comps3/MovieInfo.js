import React from 'react';
import MovieTile from '../components/MovieTile';
import { StyledMovieInfo } from '../styles/StyledComponents';
import NoPoster from '../images/no_poster.jpg';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addMovie, addAlert, addToWatchlist } from '../actions/actions';

const IMAGE_URL = 'http://image.tmdb.org/t/p';
// const backdrop_size = 'w1280';
const poster_size = 'w500';

function MovieInfo({ movie }) {
	const history = useHistory();
	const { movieId } = useParams();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const movies = useSelector((state) => state.movies);

	const handleAddMovie = async () => {
		const movieInfo = {
			id: movie.id,
			original_title: movie.original_title,
			overview: movie.overview,
			poster_path: movie.poster_path,
			vote_average: movie.vote_average,
			runtime: movie.runtime,
			released_year: movie.released_year,
			backdrop_path: movie.backdrop_path,
			_token: user.token
		};

		await dispatch(addMovie(movieInfo));
		await dispatch(addToWatchlist(user.id, movieInfo));
		console.log('movie added to watchlist', movies);
		history.push('/watchlist');
	};

	const handleRemoveMovie = async () => {
		// const res = await CapstoneApi.deleteMovie(movieId, user.token);
		// if (res.message) {
		// 	alert(res.message);
		// }
		// history.push('/movies');

		// const res = await CapstoneApi.deleteWatchlist(user.id, movieId);
		// if (res.message) {
		// 	alert(res.message);
		// }
		// history.push('/watchlist');

		await dispatch(addToWatchlist(user.id, movies));
		alert(dispatch(addAlert('MOVIE REMOVED FROM WATCHLIST')));
		history.push('/watchlist');
	};

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
					<h3>PLOT</h3>
					<p>{movie.overview}</p>

					<div className='rating-director'>
						<div>
							<h3>IMDB RATING</h3>
							<div className='score'>{movie.vote_average}</div>
						</div>

						<div className='director'>
							<h3>DIRECTOR{movie.directors.length > 1 ? "'s" : ''}</h3>
							{movie.directors.map((person) => (
								<p key={person.credit_id}>{person.name}</p>
							))}
						</div>

						<div className='watchlist'>
							<h3>ADD TO WATCHLIST</h3>
							<button onClick={handleAddMovie}>Add</button>
							<button onClick={handleRemoveMovie}>Remove</button>
						</div>
					</div>
				</div>
			</div>
		</StyledMovieInfo>
	);
}

export default MovieInfo;

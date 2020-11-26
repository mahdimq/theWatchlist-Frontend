import React, { useState, useEffect } from 'react';
import MovieTile from '../components/MovieTile';
import { StyledMovieInfo } from '../styles/StyledComponents';
import NoPoster from '../images/no_poster.jpg';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addMovie } from '../actions/actions';

const IMAGE_URL = 'http://image.tmdb.org/t/p';
// const backdrop_size = 'w1280';
const poster_size = 'w500';

function MovieInfo({ movie }) {
	const { movieId } = useParams();
	const [movieInfo, setMovieInfo] = useState({});
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const movies = useSelector((state) => state.movies);

	console.log('### MOVIE PROP MOVIE INFO ###', movie);
	console.log('### MOVIES REDUX in MOVIE INFO ###', movies);
	console.log('### USE PARAMS MOVIE ID IN MOVIE INFO ###', movieId);
	console.log('### USER STATE in MOVIE INFO ###', user);
	console.log('### MOVIE STATE in LOCALSTATE ###', movieInfo);

	const handleAddMovie = () => {
		setMovieInfo({
			id: movie.id,
			title: movie.original_title,
			description: movie.overview,
			image: movie.poster_path,
			rating: movie.vote_average
		});
	};

	dispatch(addMovie(movieInfo));

	for (let i in movies) {
		if (movieId === movies[i]) {
			console.log('YES IS EXISTS', movies[i]);
		} else {
			console.log('NO LUCK', movies[i]);
		}
	}
	// useEffect(() => {});

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
							<button>Remove</button>
						</div>
					</div>
				</div>
			</div>
		</StyledMovieInfo>
	);
}

export default MovieInfo;

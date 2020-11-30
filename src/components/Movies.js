import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllFilms } from '../actions/actions';

import Grid from './Grid';
import MovieTile from './MovieTile';
import Spinner from './Spinner';

function Movies() {
	const [isLoaded, setIsLoaded] = useState(false);
	const dispatch = useDispatch();
	const { movie } = useSelector((state) => state.movies);

	const IMAGE_URL = 'http://image.tmdb.org/t/p';
	const poster_size = 'w500';

	useEffect(() => {
		async function getFilms() {
			await dispatch(getAllFilms());
			setIsLoaded(true);
		}
		getFilms();
	}, [dispatch]);

	if (!isLoaded) {
		return <Spinner />;
	}

	console.log('### MOVIE in MAIN COMP###', movie);
	console.log('### MOVIES ARRAY ###', movie);

	return (
		<>
			{movie.length !== 0 ? (
				<Grid header='Movies in the DB'>
					{movie.map((film) => (
						<MovieTile
							key={film.id}
							clickable={true}
							image={`${IMAGE_URL}/${poster_size}/${film.poster_path}`}
							movieId={film.id}
							movieTitle={film.original_title}
						/>
					))}
				</Grid>
			) : (
				<h1>NO MOVIES IN THE DATABASE</h1>
			)}
		</>
	);
}

export default Movies;

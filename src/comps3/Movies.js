import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllFilms } from '../actions/actions';

import Grid from '../components/Grid';
import MovieTile from '../components/MovieTile';
function Movie() {
	const [isLoaded, setIsLoaded] = useState(false);
	const dispatch = useDispatch();
	const movies = useSelector((state) => state.movies);

	const IMAGE_URL = 'http://image.tmdb.org/t/p';
	const poster_size = 'w500';
	// console.log('### ID IN ###', id);

	useEffect(() => {
		async function getFilms() {
			await dispatch(getAllFilms());
			setIsLoaded(true);
		}
		getFilms();
	}, [dispatch]);

	if (!isLoaded) {
		return <h3>Loading...</h3>;
	}

	console.log('### MOVIE ###', movies);
	return (
		<Grid header='Movies in the DB'>
			{movies.movie.map((film) => (
				<MovieTile
					key={film.id}
					clickable={true}
					image={`${IMAGE_URL}/${poster_size}/${film.image}`}
					movieId={film.id}
					movieTitle={film.title}
				/>
			))}
		</Grid>
	);
}

export default Movie;

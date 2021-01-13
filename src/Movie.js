import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovieHook } from './hooks/useMovieHook';

// Component Imports
import Navigation from './components/Navigation';
import MovieInfoBar from './components/MovieInfoBar';
import MovieInfo from './components/MovieInfo';
import Grid from './components/Grid';
import Spinner from './components/Spinner';
import Actor from './components/Actor';

function Movie() {
	const { movieId } = useParams();
	const [movie, loading, error] = useMovieHook(movieId);

	if (error)
		return (
			<h1 style={{ color: '#c20a0a', margin: '1.2em auto', textAlign: 'center' }}>
				Uh Oh! Looks like a 404 Error!
			</h1>
		);

	if (loading) return <Spinner />;

	return (
		<div>
			<Navigation movie={movie.original_title} />
			<MovieInfo movie={movie} />
			<MovieInfoBar
				time={movie.runtime}
				released={movie.release_date}
				revenue={movie.revenue}
			/>
			<Grid header='Actors'>
				{movie.actors.map((actor) => (
					<Actor key={actor.credit_id} actor={actor} />
				))}
			</Grid>
		</div>
	);
}

export default Movie;

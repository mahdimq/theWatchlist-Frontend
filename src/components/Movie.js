import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovieHook } from '../hooks/useMovieHook';

// Components
import Navigation from './Navigation';
import MovieInfoBar from './MovieInfoBar';
import MovieInfo from './MovieInfo';
import Grid from './Grid';
import Spinner from './Spinner';
import Actor from './Actor';

function Movie() {
	const { movieId } = useParams();
	const [movie, loading, error] = useMovieHook(movieId);
	console.log('### MOVIE IN MOVIEINFO: ', movie);

	if (error) return <div>Oops.. Please try again, error!</div>;
	if (loading) return <Spinner />;

	return (
		<div>
			<Navigation movie={movie.original_title} />
			<MovieInfo movie={movie} />
			<MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
			<Grid header='Actors'>
				{movie.actors.map((actor) => (
					<Actor key={actor.credit_id} actor={actor} />
				))}
			</Grid>
		</div>
	);
}

export default Movie;

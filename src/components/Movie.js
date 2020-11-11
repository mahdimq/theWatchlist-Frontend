import React from 'react';
import { useParams } from 'react-router-dom';

function Movie() {
	const { movieId } = useParams();
	console.log('THIS IS THE MOVIE ID: ', movieId);
	return <div>Movie: {movieId}</div>;
}

export default Movie;

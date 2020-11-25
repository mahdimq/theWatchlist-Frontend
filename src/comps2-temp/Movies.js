// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { getAllFilms, getMovie } from '../actions/actions';

// function Movie() {
// 	const [isLoaded, setIsLoaded] = useState(false);
// 	const dispatch = useDispatch();
// 	const movies = useSelector((state) => state.movies);

// 	const IMAGE_URL = 'http://image.tmdb.org/t/p';
// 	const poster_size = 'w500';
// 	// console.log('### ID IN ###', id);

// 	useEffect(() => {
// 		async function checkUser() {
// 			await dispatch(getMovie(531219));
// 			setIsLoaded(true);
// 		}
// 		checkUser();
// 	}, [dispatch]);

// 	if (!isLoaded) {
// 		return <h3>Loading...</h3>;
// 	}

// 	console.log('### MOVIE ###', movies);
// 	return (
// 		<div>
// 			<h1>MOVIE COMP</h1>

// 			<div>
// 				<h3>{movies.movie.title}</h3>
// 				<p>{movies.movie.description}</p>
// 				<p>Rating: {movies.movie.rating}</p>
// 				<img
// 					style={{ width: '250px' }}
// 					src={`${IMAGE_URL}/${poster_size}/${movies.movie.image}`}
// 					alt={movies.movie.title}
// 				/>
// 			</div>
// 		</div>
// 	);
// }

// export default Movie;

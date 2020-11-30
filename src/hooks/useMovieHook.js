import { useState, useEffect, useCallback } from 'react';

import CapstoneApi from '../CapstoneApi';

export const useMovieHook = (movieId) => {
	const [movie, setMovie] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const checkDbFirst = async (movie_id) => {
		console.log('### MOVIE ID ###', movie_id);
		console.log('CHECK IN DB FIRST');
		let result = await CapstoneApi.getMovie(movie_id);
		console.log('FOUND IN DB', result);
		if (!result) {
			console.log('NOT FOUND IN DB', result);
			result = await CapstoneApi.getById(movie_id);
			console.log('PULLING FROM API', result);
		}
		return result;
	};

	const fetchData = useCallback(async () => {
		setError(false);
		setLoading(true);

		try {
			// const result = await CapstoneApi.getById(movieId);
			const result = await checkDbFirst(movieId);
			const credits = await CapstoneApi.getMovieCredits(movieId);
			const directors = credits.crew.filter((person) => person.job === 'Director');

			setMovie({
				...result,
				actors: credits.cast,
				directors
			});
		} catch (err) {
			setError(true);
			console.log('ERROR FROM THE MOVIE HOOK', err);
			console.error(err);
		}

		setLoading(false);
	}, [movieId]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);
	return [movie, loading, error];
};

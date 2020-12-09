import { useState, useEffect, useCallback } from 'react';

import CapstoneApi from '../CapstoneApi';

export const useMovieHook = (movieId) => {
	const [movie, setMovie] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const fetchData = useCallback(async () => {
		setError(false);
		setLoading(true);

		try {
			// Pull from API
			const result = await CapstoneApi.getById(movieId);

			// Pull from Database
			// const result = await checkDbFirst(movieId);
			const credits = await CapstoneApi.getMovieCredits(movieId);
			const directors = credits.crew.filter((person) => person.job === 'Director');

			setMovie({
				...result,
				actors: credits.cast,
				directors
			});
		} catch (err) {
			setError(true);
			console.error(err);
		}
		setLoading(false);
	}, [movieId]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return [movie, loading, error];
};

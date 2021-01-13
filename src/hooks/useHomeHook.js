import { useState, useEffect } from 'react';
import { POPULAR_ENDPOINT } from '../helpers/config';

export const useHomeHook = (searchQuery) => {
	const [state, setState] = useState({ movies: [] });
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const fetchMovies = async (endpoint) => {
		setError(false);
		setLoading(true);

		// Find the word "page" in the endpoint to trigger load button
		const isLoadBtnPressed = endpoint.search('page');

		try {
			const result = await (await fetch(endpoint)).json();
			setState((prev) => ({
				...prev,
				movies:
					isLoadBtnPressed !== -1
						? [...prev.movies, ...result.results]
						: [...result.results],
				heroImage: prev.heroImage || result.results[0],
				currentPage: result.page,
				totalPages: result.total_pages
			}));
		} catch (error) {
			setError(true);
			console.log(error);
		}
		setLoading(false);
	};

	// Fetch popular movies initially on mount
	useEffect(() => {
		// if (sessionStorage.homepageState) {
		// 	setState(JSON.parse(sessionStorage.homepageState));
		// 	setLoading(false);
		// } else {
		// 	fetchMovies(POPULAR_ENDPOINT);
		// }
		fetchMovies(POPULAR_ENDPOINT);
	}, []);

	useEffect(() => {
		if (!searchQuery) {
			sessionStorage.setItem('homepageState', JSON.stringify(state));
		}
	}, [searchQuery, state]);

	return [{ state, loading, error }, fetchMovies];
};

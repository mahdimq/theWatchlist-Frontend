import { useState, useEffect } from 'react';
import CapstoneApi from '../CapstoneApi';

export const useHomeHook = (searchQuery) => {
	//<-- pass on endpoint to use in the home page.
	const [isLoading, setIsLoading] = useState(false);
	const [state, setState] = useState({ movies: [] });
	const [error, setError] = useState(false);

	const fetchMovies = async (endpoint) => {
		setError(false);
		setIsLoading(true);

		// const isLoadMore = endpoint.search('#something in the string#'); //<-- search for 'page' so the load button is active
		const isLoadMore = endpoint;

		try {
			const result = await await endpoint; //<-- popular movies
			// const result = await CapstoneApi.getTrending(); //<-- trending movies
			// const randIdx = Math.floor(Math.random() * 20); //<-- to get random hero image from popular movies
			setState((prevMovies) => ({
				...prevMovies,
				movies: [...result.results],
				// movies: isLoadMore !== -1 ? [...prevMovies.movies, ...result.results] : [...result.results],
				heroImage: prevMovies.heroImage || result.results[0],
				currentPage: result.page,
				totalPages: result.total_pages
			}));
		} catch (err) {
			console.error(err);
			setError(true);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		if (!searchQuery) {
			fetchMovies(CapstoneApi.getPopular());
		} else {
			fetchMovies(CapstoneApi.search(searchQuery));
		}
		setIsLoading(false);
	}, [searchQuery]);

	return [{ state, isLoading, error }, fetchMovies];
};

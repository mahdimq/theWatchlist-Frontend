import { useState, useEffect } from 'react';
import CapstoneApi from '../CapstoneApi';

export const useHomeHook = (searchTerm) => {
	const [isLoading, setIsLoading] = useState(false);
	const [state, setState] = useState({ movies: [] });
	const [error, setError] = useState(false);

	const fetchMovies = async () => {
		setError(false);
		setIsLoading(true);

		const isLoadMore = async (query) => {
			try {
				const result = await CapstoneApi.search(query);
				console.log(result);
			} catch (err) {
				console.error(err);
			}
		};

		try {
			const result = await CapstoneApi.getPopular();
			const randIdx = Math.floor(Math.random() * 20); //<-- to get random hero image from popular movies
			setState((prevMovies) => ({
				...prevMovies,
				movies: isLoadMore !== -1 ? [...prevMovies.movies, ...result.results] : [...result.results],
				heroImage: prevMovies.heroImage || result.results[randIdx],
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
		fetchMovies();
	}, []);

	useEffect(() => {}, [searchTerm, state]);

	return [{ state, isLoading, error }, fetchMovies];
};

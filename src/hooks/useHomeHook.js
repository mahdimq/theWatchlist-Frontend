import { useState, useEffect } from 'react';
import CapstoneApi from '../CapstoneApi';

export const useHomeHook = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [movies, setMovies] = useState({ movies: [] });
	const [error, setError] = useState(false);

	const fetchMovies = async () => {
		setError(false);
		setIsLoading(true);

		try {
			const result = await CapstoneApi.getPopular();
			const randIdx = Math.floor(Math.random() * 20); //<-- to get random hero image from popular movies
			setMovies((prevMovies) => ({
				...prevMovies,
				movies: [...result.results],
				heroImage: prevMovies.heroImage || result.results[randIdx],
				currentPage: result.page,
				totalPages: result.total_pages
			}));
		} catch (err) {
			console.error(err);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	return [{ movies, isLoading, error }, fetchMovies];
};

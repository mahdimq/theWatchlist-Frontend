import React, { useState } from 'react';

// Import Components
import Grid from './components/Grid';
import HeroImage from './components/HeroImage';
import LoadMore from './components/LoadMore';
import MovieTile from './components/MovieTile';
import Search from './components/Search';
import Spinner from './components/Spinner';

// Import config files to load home page
import {
	POPULAR_ENDPOINT,
	SEARCH_ENDPOINT,
	poster_size,
	backdrop_size,
	IMAGE_URL
} from './helpers/config';

// Import Custom Hook
import { useHomeHook } from './hooks/useHomeHook';

// show default image if poster image doesn't exist
import NoPoster from './images/no_poster.jpg';

const Home = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [
		{
			state: { movies, currentPage, totalPages, heroImage },
			loading,
			error
		},
		fetchMovies
	] = useHomeHook(searchQuery);

	// Search movies function
	const searchMovies = (query) => {
		const endpoint = query ? `${SEARCH_ENDPOINT}${query}` : POPULAR_ENDPOINT;

		setSearchQuery(query);
		fetchMovies(endpoint);
	};

	// Load more movies button
	const loadMoreMovies = () => {
		const searchEndpoint = `${SEARCH_ENDPOINT}${searchQuery}&page=${currentPage + 1}`;
		const popularEndpoint = `${POPULAR_ENDPOINT}&page=${currentPage + 1}`;

		const endpoint = searchQuery ? searchEndpoint : popularEndpoint;
		fetchMovies(endpoint);
	};

	if (movies.length === 0)
		return (
			<h1 style={{ color: '#c20a0a', margin: '1.2em auto', textAlign: 'center' }}>
				NO RESULTS FOUND <p>(Please refresh the page)</p>
				<Spinner />
			</h1>
		);
	if (!movies[0]) return <Spinner />;
	if (error) return <h3>Uh Oh! Something went wrong!</h3>;

	return (
		<>
			{!searchQuery && (
				<HeroImage
					image={`${IMAGE_URL}/${backdrop_size}/${heroImage.backdrop_path}`}
					title={heroImage.original_title}
					text={heroImage.overview}
				/>
			)}

			<Search callback={searchMovies} />

			<Grid header={searchQuery ? 'Search Results' : 'Popular Movies'}>
				{movies.map((film) => (
					<div key={film.id}>
						<MovieTile
							clickable={true}
							image={
								film.poster_path ? `${IMAGE_URL}/${poster_size}/${film.poster_path}` : NoPoster
							}
							movieId={film.id}
							movieTitle={film.original_title}
						/>
						<p className='movietile-title'>{film.title}</p>
					</div>
				))}
			</Grid>

			{loading && <Spinner />}

			{currentPage < totalPages && !loading ? (
				<LoadMore text='Load More' callback={loadMoreMovies} />
			) : (
				<h1 style={{ color: '#c20a0a', margin: '1.2em auto', textAlign: 'center' }}>
					END OF RESULTS
				</h1>
			)}
		</>
	);
};

export default Home;

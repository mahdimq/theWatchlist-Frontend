import React, { useState, useEffect } from 'react';
import Grid from './components/Grid';
import HeroImage from './components/HeroImage';
import LoadMore from './components/LoadMore';
import MovieTile from './components/MovieTile';
import Search from './components/Search';
import Spinner from './components/Spinner';
import CapstoneApi from './CapstoneApi';

// Import Custom Hook
import { useHomeHook } from './hooks/useHomeHook';

// show default image if poster image doesn't exist
import NoPoster from './images/no_poster.jpg';

const IMAGE_URL = 'http://image.tmdb.org/t/p';
const backdrop_size = 'w1280';
const poster_size = 'w500';

function Home() {
	const [searchQuery, setSearchQuery] = useState('');
	const [
		{
			state: { movies, currentPage, totalPages, heroImage },
			loading,
			error
		},
		fetchMovies
	] = useHomeHook(searchQuery);

	console.log('#### DETAILS ####', movies);

	const searchMovies = (query) => {
		const endpoint =
			searchQuery || query !== '' ? CapstoneApi.search(query) : CapstoneApi.getPopular();

		setSearchQuery(query);
		fetchMovies(endpoint);
	};

	// NEED TO FIX
	// ============
	const loadMoreMovies = (query) => {
		const searchEndpoint = CapstoneApi.search(query, currentPage + 1);
		const popularEndpoint = CapstoneApi.getPopular(currentPage + 1);

		const endpoint = searchQuery ? searchEndpoint : popularEndpoint;

		fetchMovies(endpoint);
	};
	// ######################################################################################################################

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
						<p style={{ textAlign: 'center', margin: '0 auto' }}>{film.title}</p>
					</div>
				))}
			</Grid>

			{/* <Grid header='Comedy Movies'>
				<MovieTile
					clickable={true}
					image={
						movies[0].poster_path
							? `${IMAGE_URL}/${poster_size}/${movies[0].poster_path}`
							: NoPoster
					}
					movieId={movies[0].id}
					movieTitle={movies[0].original_title}
				/>
			</Grid> */}

			{loading && <Spinner />}
			{currentPage < totalPages && !loading ? (
				<LoadMore text='Load More' callback={loadMoreMovies} />
			) : (
				<h1>NO MORE RESULTS</h1>
			)}
		</>
	);
}

export default Home;

import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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

// ****************************************************************
// ****************************************************************
// Find out how to get the image URL and other details from backend
// rather then frontend, or is frontend alright for this
const IMAGE_URL = 'http://image.tmdb.org/t/p';

const backdrop_size = 'w1280';
const poster_size = 'w500';
// ****************************************************************
// ****************************************************************

function Home() {
	const [{ movies, isLoading, error }, fetchMovies] = useHomeHook();
	const [search, setSearch] = useState('');
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);

	// ######################################################################################################################
	// ######################################################################################################################
	// ######################################################################################################################
	// ######################################################################################################################
	// SEPARATE STATE MANAGEMENT LOGIC TO CUSTOM HOOK OR REDUX
	// const [action, setAction] = useState({ movies: [] });
	// const [trending, setTrending] = useState({ movies: [] });
	// const [comedy, setComedy] = useState({ movies: [] });

	// // ######################################################################################################################
	// // Need to separate different endpoint logic to hooks folder (or redux)
	// // fetch action
	// const fetchAction = async () => {
	// 	try {
	// 		const result = await CapstoneApi.getAction();
	// 		const randIdx = Math.floor(Math.random() * 20); //<-- to get random hero image from popular movies
	// 		setAction((prevMovies) => ({
	// 			...prevMovies,
	// 			movies: [...result.results],
	// 			heroImage: prevMovies.heroImage || result.results[randIdx],
	// 			currentPage: result.page,
	// 			totalPages: result.total_pages
	// 		}));
	// 	} catch (err) {
	// 		console.error(err);
	// 	}
	// };
	// // ****************************************************************
	// // fetch comedy
	// const fetchComedy = async () => {
	// 	try {
	// 		const result = await CapstoneApi.getComedy();
	// 		const randIdx = Math.floor(Math.random() * 20); //<-- to get random hero image from popular movies
	// 		setComedy((prevMovies) => ({
	// 			...prevMovies,
	// 			movies: [...result.results],
	// 			heroImage: prevMovies.heroImage || result.results[randIdx],
	// 			currentPage: result.page,
	// 			totalPages: result.total_pages
	// 		}));
	// 	} catch (err) {
	// 		console.error(err);
	// 	}
	// };
	// // ****************************************************************
	// // fetch trending
	// const fetchTrending = async () => {
	// 	try {
	// 		const result = await CapstoneApi.getTrending();
	// 		const randIdx = Math.floor(Math.random() * 20); //<-- to get random hero image from popular movies
	// 		setTrending((prevMovies) => ({
	// 			...prevMovies,
	// 			movies: [...result.results],
	// 			heroImage: prevMovies.heroImage || result.results[randIdx],
	// 			currentPage: result.page,
	// 			totalPages: result.total_pages
	// 		}));
	// 	} catch (err) {
	// 		console.error(err);
	// 	}
	// };

	// useEffect(() => {
	// 	fetchTrending();
	// 	fetchComedy();
	// 	fetchAction();
	// }, []);
	// ######################################################################################################################
	// ######################################################################################################################
	// ######################################################################################################################
	// ######################################################################################################################

	if (movies.movies.length === 0) return <Spinner />;
	if (error) return <h3>Uh Oh! Something went wrong!</h3>;

	return (
		<>
			{user ? (
				<>
					<HeroImage
						image={`${IMAGE_URL}/${backdrop_size}/${movies.heroImage.backdrop_path}`}
						title={movies.heroImage.original_title}
						text={movies.heroImage.overview}
					/>

					<Search callback='search logic' />

					<Grid header={search ? 'Search Result' : 'Popular Movies'}>
						{movies.movies.map((film) => (
							<MovieTile
								key={film.id}
								clickable={true}
								image={
									film.poster_path ? `${IMAGE_URL}/${poster_size}/${film.poster_path}` : NoPoster
								}
								movieId={film.id}
								movieTitle={film.original_title}
							/>
						))}
					</Grid>
					{/*
					<Grid header='Trending Movies'>
						{trending.movies.map((film) => (
							<MovieTile
								key={film.id}
								clickable={true}
								image={
									film.poster_path ? `${IMAGE_URL}/${poster_size}/${film.poster_path}` : NoPoster
								}
								movieId={film.id}
								movieTitle={film.original_title}
							/>
						))}
					</Grid>

					<Grid header='Action Movies'>
						{action.movies.map((film) => (
							<MovieTile
								key={film.id}
								clickable={true}
								image={
									film.poster_path ? `${IMAGE_URL}/${poster_size}/${film.poster_path}` : NoPoster
								}
								movieId={film.id}
								movieTitle={film.original_title}
							/>
						))}
					</Grid>

					<Grid header='Comedy Movies'>
						{comedy.movies.map((film) => (
							<MovieTile
								key={film.id}
								clickable={true}
								image={
									film.poster_path ? `${IMAGE_URL}/${poster_size}/${film.poster_path}` : NoPoster
								}
								movieId={film.id}
								movieTitle={film.original_title}
							/>
						))}
					</Grid> */}

					<LoadMore />
				</>
			) : (
				<Link to='/login'>Log In</Link>
			)}
		</>
	);
}

export default Home;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieTile from '../components/MovieTile';

import CapstoneApi from '../CapstoneApi';

import Grid from '../components/Grid';

import NoPoster from '../images/no_poster.jpg';
//Home page banner
const IMAGE_URL = 'http://image.tmdb.org/t/p';

const poster_size = 'w500';

function Home() {
	const [comedy, setComedy] = useState({ movies: [] });

	const fetchComedy = async () => {
		try {
			const result = await CapstoneApi.getComedy();
			const randIdx = Math.floor(Math.random() * 20); //<-- to get random hero image from popular movies
			setComedy((prevMovies) => ({
				...prevMovies,
				movies: [...result.results],
				heroImage: prevMovies.heroImage || result.results[randIdx],
				currentPage: result.page,
				totalPages: result.total_pages
			}));
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		fetchComedy();
	}, []);

	return (
		<section>
			<h1>HOME COMPONENT</h1>
			<Grid header='Comedy Movies'>
				{comedy.movies.map((film) => (
					<MovieTile
						key={film.id}
						clickable={true}
						image={film.poster_path ? `${IMAGE_URL}/${poster_size}/${film.poster_path}` : NoPoster}
						movieId={film.id}
						movieTitle={film.original_title}
					/>
				))}
			</Grid>

			<Link to='/login'>Login</Link>
			<Link to='/signup'>Sign Up</Link>
		</section>
	);
}

export default Home;

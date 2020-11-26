import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decode } from 'jsonwebtoken';
import { loadWatchlist, addAlert } from '../actions/actions';

import Grid from './Grid';
import MovieTile from './MovieTile';
import NoPoster from '../images/no_poster.jpg';
import Spinner from './Spinner';

function Watchlist() {
	const [isLoaded, setIsLoaded] = useState(false);
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const watchlist = useSelector((state) => state.watchlist);

	const IMAGE_URL = 'http://image.tmdb.org/t/p';
	const poster_size = 'w500';

	// Confirm if correct user then load the watchlist
	useEffect(() => {
		async function confirmUser() {
			const token = localStorage.getItem('user-token') || null;
			const { id } = decode(token);
			if (user.id === id) {
				await dispatch(loadWatchlist(id));
			}
			setIsLoaded(true);
		}
		confirmUser();
	}, [dispatch, user.id]);

	if (!isLoaded) {
		return <Spinner />;
	}

	return (
		<Grid header='Watch List'>
			{watchlist.map((film) => (
				<MovieTile
					key={film.id}
					clickable={true}
					image={film.image ? `${IMAGE_URL}/${poster_size}/${film.image}` : NoPoster}
					movieId={film.id}
					movieTitle={film.title}
				/>
			))}
		</Grid>
	);
}

export default Watchlist;

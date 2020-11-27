import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decode } from 'jsonwebtoken';
import { loadWatchlist, addAlert } from '../actions/actions';

import Grid from '../components/Grid';
import MovieTile from '../components/MovieTile';
import NoPoster from '../images/no_poster.jpg';
import Spinner from '../components/Spinner';

function Watchlist() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
	const watchlist = useSelector((state) => state.watchlist);
	const user = useSelector((state) => state.user);
	const IMAGE_URL = 'http://image.tmdb.org/t/p';
	const poster_size = 'w500';

	useEffect(() => {
		async function getWatchlist() {
			try {
				await dispatch(loadWatchlist(user.id));
				setIsLoaded(true);
			} catch (err) {
				dispatch(addAlert(err));
				console.log('## ERROR ##', err);
			}
		}
		getWatchlist();
	}, [dispatch]);

	console.log('### WATCHLIST MOVIES ###', watchlist);

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

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { decode } from 'jsonwebtoken';
import { loadWatchlist, addAlert } from '../actions/actions';

import Grid from './Grid';
import MovieTile from './MovieTile';
import NoPoster from '../images/no_poster.jpg';
import Spinner from './Spinner';
import { useHistory } from 'react-router-dom';

function Watchlist() {
	const history = useHistory();
	const [isLoaded, setIsLoaded] = useState(false);
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const { watchlist } = useSelector((state) => state.watchlist);

	const IMAGE_URL = 'http://image.tmdb.org/t/p';
	const poster_size = 'w500';

	// Confirm if logged in, if so confirm correct user then load the watchlist
	useEffect(() => {
		if (!user.token) {
			async function checkLogin() {
				if (user.token) {
					history.push('/');
				} else {
					dispatch(addAlert('Please Login First'));
					history.push('/login');
				}
			}
			checkLogin();
		} else {
			async function confirmUser() {
				const token = localStorage.getItem('user-token') || null;
				const { id } = decode(token);
				if (user.id === id) {
					await dispatch(loadWatchlist(id));
				} else {
				}
				setIsLoaded(true);
			}

			confirmUser();
		}
	}, [dispatch, user.id]);

	if (!isLoaded) {
		return <Spinner />;
	}

	console.log('### WATCHLIST ARRAY ###', watchlist);
	return (
		<>
			{watchlist.length !== 0 ? (
				<Grid header='Watch List'>
					{watchlist.map((film) => (
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
			) : (
				<h1>WATCHLIST IS EMPTY</h1>
			)}
		</>
	);
}

export default Watchlist;

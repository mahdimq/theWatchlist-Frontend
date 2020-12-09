import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decode } from 'jsonwebtoken';
import { loadWatchlist, addAlert } from '../actions/actions';

// Import Components
import Grid from './Grid';
import MovieTile from './MovieTile';
import NoPoster from '../images/no_poster.jpg';
import Spinner from './Spinner';
import { useHistory } from 'react-router-dom';
import { IMAGE_URL, poster_size } from '../helpers/config';

function Watchlist() {
	const history = useHistory();
	const [isLoaded, setIsLoaded] = useState(false);
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const { watchlist } = useSelector((state) => state.watchlist);

	// Confirm if logged in, if so confirm correct user then load the watchlist
	useEffect(() => {
		if (!user.token) {
			async function checkLogin() {
				if (user.token) {
					history.push('/');
				} else {
					dispatch(addAlert('Please Login First', 'error'));
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
					dispatch(addAlert('You must be authorized', 'error'));
					history.push('/login');
				}
				setIsLoaded(true);
			}
			confirmUser();
		}
	}, [dispatch, user.id, user.token, history]);

	if (!isLoaded) {
		return <Spinner />;
	}

	return (
		<>
			{watchlist.length !== 0 ? (
				<Grid header='Watch List'>
					{watchlist.map((film) => (
						<div key={film.id}>
							<MovieTile
								key={film.id}
								clickable={true}
								image={
									film.poster_path ? `${IMAGE_URL}/${poster_size}/${film.poster_path}` : NoPoster
								}
								movieId={film.id}
								movieTitle={film.original_title}
							/>
							<p style={{ textAlign: 'center', margin: '0 auto' }}>{film.original_title}</p>
						</div>
					))}
				</Grid>
			) : (
				<h1 style={{ color: '#c20a0a', margin: '1em auto', textAlign: 'center' }}>
					WATCHLIST IS EMPTY
				</h1>
			)}
		</>
	);
}

export default Watchlist;

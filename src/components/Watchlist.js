import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addWatchlist, getWatchlist, removeWatchlist } from '../reducers/actions';

function Watchlist({ movieData }) {
	const dispatch = useDispatch();
	const history = useHistory();
	const { id } = useParams();

	useEffect(() => {
		if (movieData.id !== id) {
			dispatch(removeWatchlist());
			dispatch(getWatchlist());
			history.push(`/watchlist`); //<--maybe add user id
		}
	}, [movieData, dispatch, id, history]);
	return <div></div>;
}

export default Watchlist;

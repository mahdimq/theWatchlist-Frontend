import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Home from '../Home';
import Login from './Login';

import Registration from './Registration';
import Profile from './Profile';
import Watchlist from './Watchlist';
import Movie from '../Movie';
import Movies from './Movies';

function Routes() {
	return (
		<Switch>
			<Route exact path='/'>
				<Home />
			</Route>

			<Route exact path='/login'>
				<Login />
			</Route>

			<Route exact path='/signup'>
				<Registration />
			</Route>

			<Route exact path='/watchlist'>
				<Watchlist />
			</Route>
			{/*
			<Route exact path='/movies'>
				<Movies />
			</Route> */}

			<Route exact path='/profile'>
				<Profile />
			</Route>

			<Route exact path='/:movieId'>
				<Movie />
			</Route>

			<Redirect to='/' />
		</Switch>
	);
}

export default Routes;

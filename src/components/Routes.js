import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

// Import Components
import Home from '../Home';
import Login from './Login';
import Registration from './Registration';
import Profile from './Profile';
import Watchlist from './Watchlist';
import Movie from '../Movie';
// import Movies from './Movies'; <-- used for development

function Routes() {
	return (
		<Switch>
			<Route exact path='/'>
				<Home />
			</Route>

			<Route path='/login'>
				<Login />
			</Route>

			<Route path='/signup'>
				<Registration />
			</Route>

			<Route path='/watchlist'>
				<Watchlist />
			</Route>

			{/*
			<Route path='/movies'>
				<Movies />
			</Route> */}

			<Route path='/profile'>
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

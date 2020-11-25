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

			<Route path='/login'>
				<Login />
			</Route>

			<Route path='/signup'>
				<Registration />
			</Route>

			<Route path='/watchlist'>
				<Watchlist />
			</Route>

			<Route path='/:movieId'>
				<Movie />
			</Route>

			<Route path='/movies'>
				<Movies />
			</Route>

			<Route path='/profile'>
				<Profile />
			</Route>

			<Route path='/users' exact>
				<h1 style={{ color: 'white' }}>USERS COMPONENT COMES HERE</h1>
			</Route>

			<Redirect to='/' />
		</Switch>
	);
}

export default Routes;

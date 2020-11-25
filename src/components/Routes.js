import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Home from '../Home';
import Login from './Login';
import Registration from './Registration';
// import Profile from './Profile';
import Account from './Account';
import Watchlist from './Watchlist';
import Movie from '../Movie';

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

				<Route path='/watchlist'>
					<Watchlist />
				</Route>
			</Route>

			<Route exact path='/:movieId'>
				<Movie />
			</Route>

			<Route path='/account'>
				<Account />
			</Route>

			<Route path='/users' exact>
				<h1 style={{ color: 'white' }}>USERS COMPONENT COMES HERE</h1>
			</Route>

			<Redirect to='/' />
		</Switch>
	);
}

export default Routes;

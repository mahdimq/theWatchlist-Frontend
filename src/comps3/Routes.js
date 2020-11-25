import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Home from '../comps3/Home';
import Login from './Login';
import Registration from './Registration';
// import Profile from './Profile';
import Account from './Account';
import Watchlist from './Watchlist';
import Movies from './Movies';

function Routes({ user_id }) {
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

			<Route exact path='/movies'>
				<Movies />
			</Route>

			<Route path='/:user_id/watchlist'>
				<Watchlist />
			</Route>

			<Route path='/account'>
				<Account />
			</Route>

			<Redirect to='/' />
		</Switch>
	);
}

export default Routes;

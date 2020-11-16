import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Watchlist from './Watchlist';
import Movies from './Movies';

function Routes() {
	return (
		<Switch>
			<Route path='/' exact>
				<Home />
			</Route>

			<Route exact path='/login'>
				<Login />
			</Route>

			<Route path='/watchlist/:userId' exact>
				<Watchlist />
			</Route>

			<Route path='/movies' exact>
				<Movies />
			</Route>

			<Redirect to='/' />
		</Switch>
	);
}

export default Routes;

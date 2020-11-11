import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Login from './components/Login';
import Movie from './components/Movie';

function Routes({ setToken }) {
	return (
		<div>
			<Switch>
				<Route exact path='/login'>
					<Login setToken={setToken} />
				</Route>

				<Route exact path='/'>
					<Home />
				</Route>

				<Route path='/movies/:movieId'>
					<Movie />
				</Route>

				<Redirect to='/login' />
			</Switch>
		</div>
	);
}

export default Routes;

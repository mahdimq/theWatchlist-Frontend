import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import rootReducer from '../reducers/rootReducer';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../components/Navigation';

const store = createStore(rootReducer);

it('renders without crashing', function () {
	render(
		<Provider store={store}>
			<BrowserRouter>
				<Navigation />
			</BrowserRouter>
		</Provider>
	);
});

it('matches snapshot', function () {
	const { asFragment } = render(
		<Provider store={store}>
			<BrowserRouter>
				<Navigation />
			</BrowserRouter>
		</Provider>
	);
	expect(asFragment()).toMatchSnapshot();
});

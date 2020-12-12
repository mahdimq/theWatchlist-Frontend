import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import rootReducer from '../reducers/rootReducer';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../components/Routes';

const store = createStore(rootReducer);

it('renders without crashing', function () {
	render(
		<Provider store={store}>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</Provider>
	);
});

it('matches snapshot', function () {
	const { asFragment } = render(
		<Provider store={store}>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</Provider>
	);
	expect(asFragment()).toMatchSnapshot();
});

import React from 'react';
import { render } from '@testing-library/react';
import MovieInfoBar from '../components/MovieInfoBar';

it('renders without crashing', function () {
	render(<MovieInfoBar />);
});

it('matches snapshot', function () {
	const { asFragment } = render(<MovieInfoBar />);
	expect(asFragment()).toMatchSnapshot();
});

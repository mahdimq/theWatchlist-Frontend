import React from 'react';
import { render } from '@testing-library/react';
import Grid from '../components/Grid';

it('renders without crashing', function () {
	render(<Grid />);
});

it('matches snapshot', function () {
	const { asFragment } = render(<Grid />);
	expect(asFragment()).toMatchSnapshot();
});

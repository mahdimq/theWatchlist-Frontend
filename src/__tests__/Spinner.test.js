import React from 'react';
import { render } from '@testing-library/react';
import Spinner from '../components/Spinner';

it('renders without crashing', function () {
	render(<Spinner />);
});

it('matches snapshot', function () {
	const { asFragment } = render(<Spinner />);
	expect(asFragment()).toMatchSnapshot();
});

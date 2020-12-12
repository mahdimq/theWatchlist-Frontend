import React from 'react';
import { render } from '@testing-library/react';
import LoadMore from '../components/LoadMore';

it('renders without crashing', function () {
	render(<LoadMore />);
});

it('matches snapshot', function () {
	const { asFragment } = render(<LoadMore />);
	expect(asFragment()).toMatchSnapshot();
});

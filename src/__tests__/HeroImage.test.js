import React from 'react';
import { render } from '@testing-library/react';
import HeroImage from '../components/HeroImage';

it('renders without crashing', function () {
	render(<HeroImage />);
});

it('matches snapshot', function () {
	const { asFragment } = render(<HeroImage />);
	expect(asFragment()).toMatchSnapshot();
});

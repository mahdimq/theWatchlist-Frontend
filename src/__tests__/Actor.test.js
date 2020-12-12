import React from 'react';
import { render } from '@testing-library/react';
import Actor from '../components/Actor';

const actor = {
	profile_path: '/test_profile.jpeg',
	name: 'test_name',
	character: 'test_character'
};

it('renders without crashing', function () {
	render(<Actor />);
});

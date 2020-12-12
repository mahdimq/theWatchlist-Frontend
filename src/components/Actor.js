import React from 'react';
import PropTypes from 'prop-types';
import { IMAGE_URL, poster_size } from '../helpers/config';

// Style Imports
import { StyledActor } from '../styles/StyledActor';

// No Image Import
import NoImage from '../images/no_poster.jpg';

function Actor({ actor }) {
	return (
		<StyledActor>
			<img
				src={actor.profile_path ? `${IMAGE_URL}/${poster_size}/${actor.profile_path}` : NoImage}
				alt={actor.name}
			/>
			<span className='actor-name'>{actor.name}</span>
			<span className='actor-character'>{actor.character}</span>
		</StyledActor>
	);
}

// Verify props
Actor.propType = {
	actor: PropTypes.object
};

export default Actor;

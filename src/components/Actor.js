import React from 'react';
import PropTypes from 'prop-types';
import { StyledActor } from '../styles/StyledComponents';
import NoImage from '../images/no_poster.jpg';

const IMAGE_URL = 'http://image.tmdb.org/t/p';
const poster_size = 'w500';

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

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NoImage from '../images/no_poster.jpg';

const StyledActor = styled.div`
	font-family: 'Abel', sans-serif;
	color: #fff;
	background: #1c1c1c;
	border-radius: 5px;
	padding: 2px;
	text-align: center;

	img {
		display: block;
		width: 100%;
		height: 200px;
		object-fit: cover;
		border-radius: 5px;
	}

	.actor-name {
		display: block;
		font-size: 1.1em;
		font-style: italic;
	}

	.actor-character {
		display: block;
		font-size: 1em;
		color: tomato;
	}
`;

const IMAGE_URL = 'http://image.tmdb.org/t/p';
const poster_size = 'w500';

function Actor({ actor }) {
	return (
		<StyledActor>
			<img
				src={actor.profile_path ? `${IMAGE_URL}/${poster_size}/${actor.profile_path}` : NoImage}
				alt='actor image'
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

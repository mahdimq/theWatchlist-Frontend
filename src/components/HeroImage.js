import React from 'react';
import PropTypes from 'prop-types';
import { StyledHero } from '../styles/StyledComponents';

function HeroImage({ image, title, text }) {
	return (
		<StyledHero image={image}>
			<div className='heroimage-content'>
				<div className='heroimage-text'>
					<h1>{title}</h1>
					<p>{text}</p>
				</div>
			</div>
		</StyledHero>
	);
}

// Verify prop types
HeroImage.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string
};

export default HeroImage;

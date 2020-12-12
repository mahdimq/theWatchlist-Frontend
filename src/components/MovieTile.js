import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Style Imports
import { StyledMovieTile } from '../styles/StyledMovieTile';

function MovieTile({ image, movieId, clickable }) {
	return (
		<StyledMovieTile>
			{clickable ? (
				<Link to={`/${movieId}`}>
					<img className='clickable' src={image} alt='movietile' />
				</Link>
			) : (
				<img src={image} alt='movietile' />
			)}
		</StyledMovieTile>
	);
}

MovieTile.propTypes = {
	image: PropTypes.string,
	movieId: PropTypes.number,
	clickable: PropTypes.bool
};
export default MovieTile;

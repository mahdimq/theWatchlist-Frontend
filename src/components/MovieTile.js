import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledMovieTile = styled.div`
	img {
		width: 100%;
		/* min-height: 340px; */
		transition: all 0.3s;
		object-fit: cover;
		border-radius: 20px;
		animation: animateMovieTile 0.5s;

		:hover {
			opacity: 0.8;
		}

		.clickable {
			cursor: pointer;
		}

		@keyframes animateMovieTile {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}
	}
`;

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

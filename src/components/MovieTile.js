import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function MovieTile({ image, movieId, MovieTile, clickable }) {
	return (
		<div>
			{clickable ? (
				<Link to={`/${movieId}`}>
					<img
						style={{
							borderRadius: '10px',
							width: '100px',
							height: '170px',
							margin: '5px'
						}}
						className='clickable'
						src={image}
						alt='movie tile'
					/>
				</Link>
			) : (
				<img src={image} alt='movie tile' />
			)}
		</div>
	);
}

export default MovieTile;

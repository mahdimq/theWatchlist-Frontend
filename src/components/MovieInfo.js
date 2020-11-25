import React from 'react';
import MovieTile from './MovieTile';
import { StyledMovieInfo } from '../styles/StyledComponents';
import NoPoster from '../images/no_poster.jpg';

const IMAGE_URL = 'http://image.tmdb.org/t/p';
// const backdrop_size = 'w1280';
const poster_size = 'w500';

function MovieInfo({ movie }) {
	return (
		<StyledMovieInfo backdrop={movie.backdrop_path}>
			<div className='movieinfo-content'>
				<div className='movieinfo-tile'>
					<MovieTile
						image={
							movie.poster_path ? `${IMAGE_URL}/${poster_size}/${movie.poster_path}` : NoPoster
						}
						clickable={false}
					/>
				</div>
				<div className='movieinfo-text'>
					<h1>{movie.title}</h1>
					<h3>PLOT</h3>
					<p>{movie.overview}</p>

					<div className='rating-director'>
						<div>
							<h3>IMDB RATING</h3>
							<div className='score'>{movie.vote_average}</div>
						</div>
						<div className='director'>
							<h3>DIRECTOR{movie.directors.length > 1 ? "'s" : ''}</h3>
							{movie.directors.map((person) => (
								<p key={person.credit_id}>{person.name}</p>
							))}
						</div>
					</div>
				</div>
			</div>
		</StyledMovieInfo>
	);
}

export default MovieInfo;

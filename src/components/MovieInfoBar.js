import React from 'react';
import PropTypes from 'prop-types';
import { calculateTime, formatDate } from '../helpers/helpers';

// Style Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { StyledMovieInfoBar } from '../styles/StyledMovieInfoBar';

function MovieInfoBar({ time, released, budget }) {
	return (
		<StyledMovieInfoBar>
			{/* MOVIE RUN TIME */}
			<div className='movieinfobar-content'>
				<div className='movieinfobar-content-col'>
					<span className='movieinfobar-info'>
						<FontAwesomeIcon
							className='icon'
							style={{ color: 'orange', marginRight: '0.4em' }}
							icon={faClock}
						/>
						Running time: {calculateTime(time)}
					</span>
				</div>

				{/* RELEASE DATE  */}
				<div className='movieinfobar-content-col'>
					<span className='movieinfobar-info'>
						<FontAwesomeIcon
							className='icon'
							style={{ color: 'skyBlue', marginRight: '0.4em' }}
							icon={faCalendarAlt}
						/>
						Released: {formatDate(released)}
					</span>
				</div>
			</div>
		</StyledMovieInfoBar>
	);
}

MovieInfoBar.propTypes = {
	time: PropTypes.number
};

export default MovieInfoBar;

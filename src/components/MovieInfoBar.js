import React from 'react';
import PropTypes from 'prop-types';
import { StyledMovieInfoBar } from '../styles/StyledComponents';

// Helper functions to help calculate the movie runtime
const calculateTime = (time) => {
	const hours = Math.floor(time / 60);
	const mins = time % 60;
	return `${hours}h ${mins}m`;
};

// Helper function to calculate movie budget
const convertMoney = (money) => {
	const formatter = new Intl.NumberFormat(`en-us`, {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 0
	});
	return formatter.format(money);
};

function MovieInfoBar({ time, budget, revenue }) {
	return (
		<StyledMovieInfoBar>
			{/* MOVIE RUN TIME */}
			<div className='movieinfobar-content'>
				<div className='movieinfobar-content-col'>
					<span className='movieinfobar-info'>Running time: {calculateTime(time)}</span>
				</div>

				{/* MOVIE BUDGET */}

				<div className='movieinfobar-content-col'>
					<span className='movieinfobar-info'>Budget: {convertMoney(budget)}</span>
				</div>

				{/* MOVIE REVENUE */}

				<div className='movieinfobar-content-col'>
					<span className='movieinfobar-info'>Revenue: {convertMoney(revenue)}</span>
				</div>
			</div>
		</StyledMovieInfoBar>
	);
}

MovieInfoBar.propTypes = {
	time: PropTypes.number,
	budget: PropTypes.number,
	revenue: PropTypes.number
};

export default MovieInfoBar;

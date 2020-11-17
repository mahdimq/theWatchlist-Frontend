import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const StyledMovieInfoBar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 100px;
	height: auto;
	background: #1c1c1c;
	padding: 20px;
	box-sizing: border-box;
	font-family: 'Abel', sans-serif;
	font-size: 20px;

	.movieinfobar-content {
		max-width: 1280px;
		width: 100%;
		margin: 0 auto;
		color: #fff;
	}

	.movieinfobar-content-col {
		float: left;
		width: 33.33%;
		box-sizing: border-box;
		padding: 10px 20px 0 0;
	}

	.movieinfobar-info {
		padding: 5px 0 0 10px;
		float: left;
	}

	.fa-time,
	.fa-revenue {
		float: left;
		margin-top: -4px;
	}

	.fa-budget {
		float: left;
		margin-top: -3px;
	}

	@media screen and (max-width: 768px) {
		.fa-time,
		.fa-revenue,
		.fa-budget {
			display: none;
		}
	}

	@media screen and (max-width: 425px) {
		font-size: 14px;
	}
`;

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

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSearchBar = styled.div`
	width: 100%;
	height: 80px;
	background: #1c1c1c;
	padding: 11px 10px 0px 10px;
	box-sizing: border-box;
	color: #fff;
`;

const StyledSearchBarContent = styled.div`
	max-width: 1280px;
	width: 100%;
	height: 55px;
	background: #353535;
	margin: 0 auto;
	border-radius: 40px;
	position: relative;
	color: #fff;

	.fa-search {
		position: absolute;

		color: #fff;
		z-index: 100;
	}

	input {
		font-family: 'Abel', sans-serif;
		font-size: 28px;
		position: absolute;
		left: 0px;
		margin: 8px 0;
		padding: 0 0 0 60px;
		border: 0;
		width: 95%;
		background: transparent;
		height: 40px;
		color: #fff;
		box-sizing: border-box;

		:focus {
			outline: none;
		}

		@media screen and (max-width: 720px) {
			font-size: 28px;
		}
	}
`;

function Search({ callback }) {
	const [search, setSearch] = useState('');
	const timeOut = useRef(null);

	const handleSearch = (e) => {
		const { value } = e.target;
		clearTimeout(timeOut.current);
		setSearch(value);

		timeOut.current = setTimeout(() => {
			callback(value);
		}, 500);
	};

	return (
		<StyledSearchBar>
			<StyledSearchBarContent>
				<input type='text' placeholder='Search Movie' onChange={handleSearch} value={search} />
			</StyledSearchBarContent>
		</StyledSearchBar>
	);
}

Search.propTypes = {
	callback: PropTypes.func
};

export default Search;

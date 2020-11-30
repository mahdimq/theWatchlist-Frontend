import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { StyledSearchBar, StyledSearchBarContent } from '../styles/StyledComponents';
import CapstoneApi from '../CapstoneApi';

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

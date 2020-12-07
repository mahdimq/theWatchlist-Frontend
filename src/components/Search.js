import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { StyledSearchBar, StyledSearchBarContent } from '../styles/StyledComponents';

function Search({ callback }) {
	const [search, setSearch] = useState('');
	const timeOut = useRef(null);

	const handleSearch = (e) => {
		const { value } = e.target;
		clearTimeout(timeOut.current);
		setSearch(value);

		timeOut.current = setTimeout(() => {
			callback(value);
		}, 300);
	};

	console.log('### SEARCH PAGE RENDERING ###');

	return (
		<StyledSearchBar>
			<StyledSearchBarContent>
				<FontAwesomeIcon className='search' icon={faSearch} />
				<input type='text' placeholder='Search Movie...' onChange={handleSearch} value={search} />
			</StyledSearchBarContent>
		</StyledSearchBar>
	);
}

Search.propTypes = {
	callback: PropTypes.func
};

export default Search;

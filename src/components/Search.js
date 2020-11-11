import React, { useState, useRef } from 'react';

function Search({ callback }) {
	const [search, setSearch] = useState('');
	const timeOut = useRef(null);

	const handleSearch = (e) => {
		clearTimeout(timeOut.current);
		setSearch(e.target.value);

		timeOut.current = setTimeout(() => {
			callback(e.target.value);
		}, 500);
		console.log(search);
	};

	return (
		<div>
			<h5>SEARCH BAR COMES HERE</h5>
			<input type='text' placeholder='Search Movie' onChange={handleSearch} value={search} />
		</div>
	);
}

export default Search;

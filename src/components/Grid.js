import React from 'react';
import PropTypes from 'prop-types';
import { StyledGrid, StyledGridContent } from '../styles/StyledComponents';

function Grid({ header, children }) {
	return (
		<StyledGrid>
			<h1>{header}</h1>
			<StyledGridContent>{children}</StyledGridContent>
		</StyledGrid>
	);
}

// Verify Proptypes
Grid.propTypes = {
	header: PropTypes.string
};
export default Grid;

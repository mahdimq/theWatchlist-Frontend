import React from 'react';
import styled from 'styled-components';

function Grid({ header, children }) {
	return (
		<div>
			<h1>{header}</h1>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
				{children}
			</div>
		</div>
	);
}

export default Grid;

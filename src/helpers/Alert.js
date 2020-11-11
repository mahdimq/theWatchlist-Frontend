import React from 'react';

function Alert({ messages }) {
	console.log(messages);
	return (
		<div className={`alert`}>
			{messages.map((err) => (
				<p style={{ color: 'red' }} key={err}>
					{err}
				</p>
			))}
		</div>
	);
}

export default Alert;

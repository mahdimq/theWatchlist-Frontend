import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeAlerts } from '../actions/actions';

//Alerts that appear at top of the screen

function Alerts() {
	const dispatch = useDispatch();
	const alerts = useSelector((state) => state.alerts);

	//flashed messages disappear after specified time
	useEffect(() => {
		if (alerts[0]) {
			setTimeout(function () {
				dispatch(removeAlerts());
			}, 4000);
		}
	});

	if (!alerts) {
		return null;
	} else {
		return (
			<div>
				{alerts.map((a, i) => (
					<h4 key={i}>{a.message}</h4>
				))}
			</div>
		);
	}
}

export default Alerts;

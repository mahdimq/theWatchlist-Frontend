// import { ADD_ALERT, REMOVE_ALERTS } from './actionTypes';

/* Actions to add alerts and remove all alerts */

function addAlert(message, type) {
	return { type: ADD_ALERT, payload: { message, type } };
}

function removeAlerts() {
	return { type: REMOVE_ALERTS };
}

export { addAlert, removeAlerts };

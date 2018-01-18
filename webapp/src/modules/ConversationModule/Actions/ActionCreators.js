import types from '../ActionTypes';

function sendSuccess(msg) {
	return {
		type: types.SEND_SUCCESS,
		payload: {
			msg
		}
	};
}

function receiveSuccess(msg) {
	return {
		type: types.RECEIVE_SUCCESS,
		payload: {
			msg
		}
	};
}

function connected(log) {
	return {
		type: types.CONNECTED,
		payload: {
			log
		}
	};
}

function disconnected(log) {
	return {
		type: types.DISCONNECTED,
		payload: {
			log
		}
	};
}

export default {
	sendSuccess,
	receiveSuccess,
	connected,
	disconnected
};

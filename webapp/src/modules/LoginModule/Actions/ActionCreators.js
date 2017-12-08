import types from '../ActionTypes';

function pingSuccess(pingResult) {
	return {
		type: types.PING_SUCCESS,
		payload: {
			pong: pingResult.result
		}
	};
}

function pingFailure(pingResult) {
	return {
		type: types.PING_FAILURE,
		payload: {
			pong: pingResult.result
		}
	};
}

export default {
	pingSuccess,
	pingFailure
};

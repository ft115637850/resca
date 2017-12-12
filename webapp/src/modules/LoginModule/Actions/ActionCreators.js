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

function loginSuccess(result) {
	return {
		type: types.LOGIN_SUCCESS,
		payload: {
			token: result.token
		}
	};
}

export default {
	pingSuccess,
	pingFailure,
	loginSuccess
};
